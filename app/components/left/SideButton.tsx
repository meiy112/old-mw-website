"use client";
import { ReactNode } from "react";
import { IoSettingsOutline } from "react-icons/io5";

interface SideButtonProps {
  onClick: () => void; // Define the type of onClick function
  text: string; // Define the type of text prop as string
  icon: ReactNode; // Icon to display in the button
}

export default function SideButton({ onClick, text, icon }: SideButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center"
      type="button"
    >
      {icon}
      <h1 className="font-medium" style={{ fontSize: 24 }}>
        {text}
      </h1>
    </button>
  );
}
