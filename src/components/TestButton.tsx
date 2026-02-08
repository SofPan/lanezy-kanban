import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/trpc/routers/_app";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc'
    })
  ]
});

const TESTBOARD = {
  id: "19548232-5d19-4062-9cd5-4f514b1f9155"
}

const TestButton = () => {
  
  const createBoard = async () => {
    const newBoard = await trpc.board.delete.mutate(TESTBOARD);
    return newBoard;
  }

  const handleClick = () => {
    createBoard();
  }
  return(
    <button className="border border-gray-400 cursor-pointer" onClick={() => handleClick()}>What do you need?</button>
  )
}

export default TestButton;