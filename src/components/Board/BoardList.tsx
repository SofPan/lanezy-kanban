'use client';
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/trpc/routers/_app";
import { useEffect, useState } from "react";
import { useBoards, Board } from "@/contexts/BoardContext";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc'
    })
  ]
});

const BoardList = () => {
  const {setBoardId} = useBoards();
  const [boards, setBoards] = useState<Board[]>([]);

  useEffect(() => {
    const getBoards = async () => {
      const userBoards = await trpc.board.getBoards.query();
      setBoards(userBoards);
    }
    getBoards();
  },[]);

  const mapBoards = boards.map(board => {
    return (
      <li onClick={() => setBoardId(board.id)} className="cursor-pointer" key={board.id}>
        {board.title}
      </li>
    )
  })

  return(
    <div>
      {
        boards.length ?
      <ul>
        {mapBoards}
      </ul>
      :
      ""
      }
    </div>
  )
}

export default BoardList;