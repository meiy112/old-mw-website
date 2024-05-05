import { createContext, useContext } from "react";

// Create a context
const isModalOpen = createContext<boolean>(false);

export function useModalContext() {
  return useContext(isModalOpen);
}

export default isModalOpen;
