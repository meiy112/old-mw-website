"use client";
import Right from "./components/right/right";
import Sidebar from "./components/left/Sidebar";
import Main from "./components/middle/main";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../app/theme/colors";
import React from "react";
import { PageProvider } from "./components/context/PageProvider";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      className=" relative z-10 flex flex-row h-[100%] justify-between"
      style={{ color: theme.palette.primary.contrastText }}
    >
      <PageProvider>
        <ThemeProvider theme={theme}>
          {/*Navbar + Logo*/}
          <div className="right">
            <Sidebar
              toggleTheme={toggleTheme}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
          {/*Main middle content*/}
          <div className="main">
            <Main isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
          </div>
          {/*You Might Like*/}
          <div className="left">
            <Right />
          </div>
        </ThemeProvider>
      </PageProvider>
    </main>
  );
}
