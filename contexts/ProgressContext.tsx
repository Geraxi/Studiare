
import React, { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { QuizCompletionStatus } from '../types';

interface ProgressContextType {
  completionStatus: QuizCompletionStatus;
  setCompletionStatus: React.Dispatch<React.SetStateAction<QuizCompletionStatus>>;
  markAsCompleted: (lessonId: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [completionStatus, setCompletionStatus] = useLocalStorage<QuizCompletionStatus>('quizCompletionStatus', {});

  const markAsCompleted = (lessonId: string) => {
    setCompletionStatus(prev => ({ ...prev, [lessonId]: true }));
  };
  
  const value = { completionStatus, setCompletionStatus, markAsCompleted };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
