"use client";
import { useTheme } from "@mui/material/styles";
import { ReactNode } from "react";

interface SideButtonProps {
  onClick: () => void; // Define the type of onClick function
  text: string; // Define the type of text prop as string
  icon: ReactNode; // Icon to display in the button
}

export default function SideButton({ onClick, text, icon }: SideButtonProps) {
  const theme = useTheme();
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center ml-[0.3125em]"
      type="button"
    >
      {icon}
      <h1
        className="font-medium text-[1.065rem] tracking-[0.32px]"
        style={{ color: theme.palette.primary.contrastText }}
      >
        {text}
      </h1>
    </button>
  );
}
