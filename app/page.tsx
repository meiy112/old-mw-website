"use client";
import Right from "./components/right/right";
import Sidebar from "./components/left/Sidebar";
import Main from "./components/middle/main";
import { createContext, useState } from "react";
import { lightTheme, darkTheme } from "./theme/colors";
import React from "react";

const ThemeContext = createContext(darkTheme);

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main
      className="flex flex-row min-h-screen items-center justify-between pl-[60px] pr-[60px]"
      style={{
        backgroundColor: currentTheme.background,
      }}
    >
      <ThemeContext.Provider value={currentTheme}>
        {/*Navbar + Logo*/}
        <Sidebar toggleTheme={toggleTheme} />
        {/*Main middle content*/}
        <Main />
        {/*You Might Like*/}
        <Right />
      </ThemeContext.Provider>
    </main>
  );
}

export function useTheme() {
  return React.useContext(ThemeContext);
}
