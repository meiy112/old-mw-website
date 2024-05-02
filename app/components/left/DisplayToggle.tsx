"use client";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import { LuMoonStar, LuSun } from "react-icons/lu";

type ToggleThemeFunction = () => void;

// Toggle between light and dark mode
export default function DisplayToggle({
  toggleTheme,
}: {
  toggleTheme: ToggleThemeFunction;
}) {
  const theme = useTheme();
  return (
    <div className="h-screen flex items-end pl-[1.75vw]">
      {theme.palette.mode == "dark" ? (
        <LuMoonStar
          size={27}
          className="mr-[1.625em]"
          color={theme.palette.primary.contrastText}
        />
      ) : (
        <LuSun
          size={27}
          className="mr-[1.625em]"
          color={theme.palette.primary.contrastText}
        />
      )}
      <div
        onClick={toggleTheme}
        className={`flex h-[3.3vh] w-[6.9vh] cursor-pointer rounded-full ${
          theme.palette.mode == "dark" ? "justify-start" : "justify-end"
        } p-[0.4vh]`}
        style={{ backgroundColor: theme.palette.primary.main }}
      >
        <motion.div
          className="h-5 w-5 rounded-full"
          style={{ backgroundColor: theme.palette.secondary.main }}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </div>
    </div>
  );
}
