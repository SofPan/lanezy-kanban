import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/trpc/routers/_app";
import { useBoards, Board } from "@/contexts/BoardContext";
import { useEffect, useState } from "react";
import DeleteBoard from "./DeleteBoard";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc'
    })
  ]
});

const ViewBoard = () => {
  const {boardId, loading, setLoading} = useBoards();
  const [board, setBoard] = useState<Board | null>(null);
  
  useEffect(() => {
    const getBoard = async () => {
      const fetchedBoard = await trpc.board.getBoardById.query({id: boardId});
      setBoard(fetchedBoard);
      setLoading(false);
    };

    if(boardId ) getBoard();
  },[boardId])

  return(
    <div>
      {
        !boardId ?
        <p>Select a board to get started</p>
        :
        loading ?
        <p>Loading...</p>
        :
        <div>
          <h2>{board!.title}</h2>
          <div className="w-56 h-56 border border-sky-500">
            <h3>Temporary Options</h3>
            <button>Edit (does nothing right now)</button>
            <DeleteBoard id={board!.id}/>
          </div>
        </div>
      }
    </div>
  )
}

export default ViewBoard;