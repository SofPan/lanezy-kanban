import { z } from 'zod';
import { publicProcedure, router } from "../trpc";
import { TRPCError } from '@trpc/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

const protectedProcedure = publicProcedure.use(async ({ next }) => {
  const session = await auth();
  
  if (!session?.user) {
    throw new TRPCError({
      code: 'UNAUTHORIZED',
      message: 'You must be logged in'
    });
  }
  
  return next({
    ctx: {
      user: session.user
    }
  });
});


export const boardRouter = router({
  getBoards: protectedProcedure.query(async ({ctx}) => {
      const user = ctx.user;
      const boards = await prisma.board.findMany({where: {"ownerId": user?.id}});
      console.log("all user boards", boards);
      return boards;
    }),
  getBoardById: publicProcedure.query(async({input}) => {
    const boardId = input?.boardId;
    const board = await prisma.board.findFirstOrThrow({where: {"id" : boardId}});
    console.log("fetched board", board);
    return board;
  }),
  create: protectedProcedure
    .input(z.object({
      title: z.string()
    }))
    .mutation(async ({ctx, input}) => {
      const user= ctx.user;
        // Get current user from session
        const userId = user?.id;
        // Check if non-admin user has < 2 boards
        if (user?.isAdmin === false){
          const existingBoards = await prisma.board.count({
            where: { ownerId: user.id }
          });
          if (existingBoards >= 2){
            throw new TRPCError({
              code: 'FORBIDDEN',
              message: 'This Demo only allows a maximum of 2 boards.'
            });
          }
        }
        // Create board with prisma
        const newBoard = await prisma.board.create({
            data: {
              ...input,
                ownerId: userId!
            }  
          });
        return newBoard;
    }),
    update: publicProcedure
    .input(z.object({
      id: z.string(),
      title: z.string(),
    }))
    .mutation(async ({input}) => {
      const editedBoard = await prisma.board.update(
        {
          where: {id: input.id},
          data: {
            title: input.title, 
          }
        },
      );
      return editedBoard;
    }),
    delete: publicProcedure
      .input(z.object({
        id: z.string()
      }))
      .mutation(async ({input}) => {
        const deleteBoard = await prisma.board.delete({where: {id: input.id}});
        return deleteBoard;
      })
})