'use client';
import { useState } from "react"
import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface BoardContext {
  boardId: string;
  loading: boolean;
  setBoardId: Dispatch<SetStateAction<string>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

export interface Board {
  id: string; 
  title: string; 
  ownerId: string; 
  createdAt: string; 
  updatedAt: string;
}

const BoardContext = createContext<BoardContext | undefined>(undefined);

export const BoardProvider = ({ children }: { children: React.ReactNode }) => {
  const [boardId, setBoardId] = useState('');
  const [loading, setLoading] = useState(true);

  const boardState:BoardContext = {
    boardId,
    loading,
    setBoardId,
    setLoading
  }

  return(
    <BoardContext.Provider value={boardState}>
      {children}
    </BoardContext.Provider>
  )
}

export const useBoards = () => {
  const context = useContext(BoardContext);
  if (!context) throw new Error('useBoards must be used within BoardsProvider');
  return context;
};