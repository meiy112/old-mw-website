"use client";
import { useTheme } from "@/app/page";
import { motion } from "framer-motion";
import { LuMoonStar, LuSun } from "react-icons/lu";

type ToggleThemeFunction = () => void;

// Toggle between light and dark mode
export default function DisplayToggle({
  toggleTheme,
}: {
  toggleTheme: ToggleThemeFunction;
}) {
  const currentTheme = useTheme();
  return (
    <div className="h-screen flex items-end">
      {currentTheme.mode == "dark" ? (
        <LuMoonStar
          size={27}
          className="mr-[1.625em]"
          color={currentTheme.onBackground}
        />
      ) : (
        <LuSun
          size={27}
          className="mr-[1.625em]"
          color={currentTheme.onBackground}
        />
      )}
      <div
        onClick={toggleTheme}
        className={`flex h-[3.3vh] w-[6.9vh] cursor-pointer rounded-full ${
          currentTheme.mode == "dark" ? "justify-start" : "justify-end"
        } p-[0.0625em]`}
        style={{ backgroundColor: currentTheme.primary, padding: 3 }}
      >
        <motion.div
          className="h-5 w-5 rounded-full"
          style={{ backgroundColor: currentTheme.button }}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </div>
    </div>
  );
}
