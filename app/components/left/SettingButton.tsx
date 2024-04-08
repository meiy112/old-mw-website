"use client";
import { IoSettingsOutline } from "react-icons/io5";

export default function SettingButton(props: { onClick: () => void }) {
  const { onClick } = props;
  return (
    <button onClick={onClick} className="items-center justify-center flex">
      <IoSettingsOutline />
      <h1>Settings</h1>
    </button>
  );
}
