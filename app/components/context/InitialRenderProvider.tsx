import React, { createContext, useContext, useState, useEffect } from "react";

const InitialRenderContext = createContext(true);

// so far not in use
export function useInitialRender() {
  return useContext(InitialRenderContext);
}

export function InitialRenderProvider({ children }: { children: any }) {
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    setIsInitialRender(false);
  }, []);

  return (
    <InitialRenderContext.Provider value={isInitialRender}>
      {children}
    </InitialRenderContext.Provider>
  );
}
