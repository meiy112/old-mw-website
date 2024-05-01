"use client";
import Right from "./components/right/right";
import Sidebar from "./components/left/Sidebar";
import Main from "./components/middle/main";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { lightTheme, darkTheme } from "../app/theme/colors";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
  }, [theme]);

  return (
    <main
      className="flex flex-row h-[100%] justify-between"
      style={{ color: theme.palette.primary.contrastText }}
    >
      <ThemeProvider theme={theme}>
        {/*Navbar + Logo*/}
        <div className="w-[20%]">
          <Sidebar toggleTheme={toggleTheme} />
        </div>
        {/*Main middle content*/}
        <div className="w-[51%]">
          <Main />
        </div>
        {/*You Might Like*/}
        <div className="w-[29%]">
          <Right />
        </div>
      </ThemeProvider>
    </main>
  );
}
