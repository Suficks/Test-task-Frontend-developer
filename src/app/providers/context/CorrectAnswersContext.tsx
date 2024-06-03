import { getItemFromLocalStorage } from "@/shared/utils/LocalStorage";
import { ReactNode, createContext, useContext, useState } from "react";

interface CorrectAnswersCounterContextType {
  correctAnswersCounter: number;
  setCorrectAnswersCounter: React.Dispatch<React.SetStateAction<number>>;
}

const CorrectAnswersCounterContext = createContext<CorrectAnswersCounterContextType>({
  correctAnswersCounter: 0,
  setCorrectAnswersCounter: () => { },
});

export const useCorrectAnswersCounter = () => useContext(CorrectAnswersCounterContext);

export const CorrectAnswersCounterProvider = ({ children }: { children: ReactNode }) => {
  const savedCorrectAnswersCounter = Number(getItemFromLocalStorage('correctAnswersCounter'));
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState<number>(savedCorrectAnswersCounter || 0);

  return (
    <CorrectAnswersCounterContext.Provider value={{ correctAnswersCounter, setCorrectAnswersCounter }}>
      {children}
    </CorrectAnswersCounterContext.Provider>
  );
};