"use client";
import { LuDog } from "react-icons/lu";
import SettingButton from "./SettingButton";

//Left sidebar with logo + settings
export default function Sidebar() {
  const handleSettingsClick = () => {
    console.log("Button Clicked!");
  };
  return (
    <div
      className="justify-start h-screen items-baseline flex flex-col"
      style={{ width: 50 }}
    >
      <LuDog size={40} style={{}} />
      <SettingButton onClick={handleSettingsClick} />
    </div>
  );
}
