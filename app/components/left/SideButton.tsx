"use client";
import { useTheme } from "@/app/page";
import { ReactNode } from "react";

interface SideButtonProps {
  onClick: () => void; // Define the type of onClick function
  text: string; // Define the type of text prop as string
  icon: ReactNode; // Icon to display in the button
}

export default function SideButton({ onClick, text, icon }: SideButtonProps) {
  const currentTheme = useTheme();
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center mb-[1.625em] ml-[0.3125em]"
      type="button"
    >
      {icon}
      <h1
        className="font-normal text-[1.065rem] tracking-[0.02em]"
        style={{ color: currentTheme.onBackground }}
      >
        {text}
      </h1>
    </button>
  );
}
