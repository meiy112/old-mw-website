"use client";
import SideButton from "./SideButton";
import {
  LuMessageSquare,
  LuHome,
  LuFolderOpen,
  LuUserCircle,
} from "react-icons/lu";
import DisplayToggle from "./DisplayToggle";
import { usePageContext } from "../context/PageProvider";

type ToggleThemeFunction = () => void;

export default function Sidebar({
  toggleTheme,
}: {
  toggleTheme: ToggleThemeFunction;
}) {
  const { setCurrentPage } = usePageContext();
  // ------------------------------ button data ------------------------------
  const buttonData = [
    {
      text: "About",
      icon: <LuHome size={26} className="mr-[1.625em]" />,
      onClick: () => setCurrentPage("About"),
    },
    {
      text: "Projects",
      icon: <LuFolderOpen size={26} className="mr-[1.625em]" />,
      onClick: () => setCurrentPage("Projects"),
    },
    {
      text: "Resume",
      icon: <LuUserCircle size={26} className="mr-[1.625em]" />,
      onClick: () => setCurrentPage("Resume"),
    },
    {
      text: "Contact",
      icon: <LuMessageSquare size={26} className="mr-[1.625em]" />,
      onClick: () => console.log("Contact Button Clicked!"),
    },
  ];
  // -------------------------------------------------------------------------

  return (
    <div className=" fixed ml-[2vw] h-screen items-baseline flex flex-col pb-[6vh] gap-y-[0.5em]">
      <DuckLogo />
      {buttonData.map((button, index) => (
        <SideButton
          key={index}
          onClick={button.onClick}
          text={button.text}
          icon={button.icon}
        />
      ))}
      <DisplayToggle toggleTheme={toggleTheme} />
    </div>
  );
}

function DuckLogo() {
  return (
    <div className="mt-[3.125em] mb-[1em] px-[1.75vw]">
      <img src="/duck-logo.png" alt="Duck Logo" width={32} />
    </div>
  );
}
