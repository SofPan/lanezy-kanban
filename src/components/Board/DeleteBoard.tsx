import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@/trpc/routers/_app";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { useBoards } from "@/contexts/BoardContext";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc'
    })
  ]
});

interface DeleteProps {
  id: string;
}

const DeleteBoard = ({id}:DeleteProps) => {
  const {setBoardId} = useBoards();
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  
  const modalText = "Are you sure you want to delete this board? This action cannot be undone."
  const handleDelete = () => {
    setModalVisible(true);
  }

  useEffect(() => {
    if(confirmDelete){
      const deleteBoard = async () => await trpc.board.delete.mutate({"id": id});
      deleteBoard();
      setBoardId("");
    }
  }, [confirmDelete])

  return(
    <>
    
    <button 
      className="border cursor-pointer" 
      onClick={() => handleDelete()}
    >Delete Board</button>
    {modalVisible &&  <Modal callback={setConfirmDelete} text={modalText} buttonText={"Confirm"} setVisible={setModalVisible} />}
    </>
  )
}

export default DeleteBoard;