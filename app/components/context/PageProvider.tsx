import React, { createContext, useContext, useState, ReactNode } from "react";

// Define a type for the context
interface PageContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

// Create the context with a default value
const PageContext = createContext<PageContextType | undefined>(undefined);

// Create a custom hook to use the context
export function usePageContext() {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePageContext must be used within a PageProvider");
  }
  return context;
}

// Create a provider component
interface PageProviderProps {
  children: ReactNode;
}

export function PageProvider({ children }: PageProviderProps) {
  // Initialize state to hold the current page
  const [currentPage, setCurrentPage] = useState<string>("About");

  // Provide the context value and updater function
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
}
