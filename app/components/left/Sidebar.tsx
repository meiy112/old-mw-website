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
      <div style={{ marginLeft: -6, marginTop: 20 }}>
        <LuDog size={40} style={{ marginBottom: 20 }} />
      </div>
      <SettingButton onClick={handleSettingsClick} />
    </div>
  );
}
