import { createTRPCRouter } from '../init';
import { boardRouter } from '@/server/routers/board';
export const appRouter = createTRPCRouter({
  board: boardRouter
});
// export type definition of API
export type AppRouter = typeof appRouter;