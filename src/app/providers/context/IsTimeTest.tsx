import { getItemFromLocalStorage } from "@/shared/utils/LocalStorage";
import { ReactNode, createContext, useContext, useState } from "react";

interface IsTimeTestContextType {
  isTimeTest: boolean;
  setIsTimeTest: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsTimeTestContext = createContext<IsTimeTestContextType>({
  isTimeTest: false,
  setIsTimeTest: () => { },
});

export const useIsTimeTest = () => useContext(IsTimeTestContext);

export const IsTimeTestProvider = ({ children }: { children: ReactNode }) => {
  const [isTimeTest, setIsTimeTest] = useState<boolean>(false);

  return (
    <IsTimeTestContext.Provider value={{ isTimeTest, setIsTimeTest }}>
      {children}
    </IsTimeTestContext.Provider>
  );
};