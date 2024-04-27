"use client";
import Right from "./components/right/right";
import Sidebar from "./components/left/Sidebar";
import Main from "./components/middle/main";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { lightTheme, darkTheme } from "../app/theme/colors";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <main
      className="flex flex-row min-h-screen justify-between pl-[3.75em] pr-[3.75em]"
      style={{
        backgroundColor: currentTheme.palette.background.default,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        {/*Navbar + Logo*/}
        <Sidebar toggleTheme={toggleTheme} />
        {/*Main middle content*/}
        <Main />
        {/*You Might Like*/}
        <Right />
      </ThemeProvider>
    </main>
  );
}
