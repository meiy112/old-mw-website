"use client";
import SideButton from "./SideButton";
import {
  LuMessagesSquare,
  LuHome,
  LuFolderOpen,
  LuUserCircle,
} from "react-icons/lu";
import DisplayToggle from "./DisplayToggle";
import { useTheme } from "@/app/page";

type ToggleThemeFunction = () => void;

export default function Sidebar({
  toggleTheme,
}: {
  toggleTheme: ToggleThemeFunction;
}) {
  const currentTheme = useTheme();
  // ------------------------------ button data ------------------------------
  const buttonData = [
    {
      text: "About",
      icon: (
        <LuHome
          size={26}
          className="mr-[1.625em]"
          color={currentTheme.onBackground}
        />
      ),
      onClick: () => console.log("About Button Clicked!"),
    },
    {
      text: "Projects",
      icon: (
        <LuFolderOpen
          size={26}
          className="mr-[1.625em]"
          color={currentTheme.onBackground}
        />
      ),
      onClick: () => console.log("Project Button Clicked!"),
    },
    {
      text: "Resume",
      icon: (
        <LuUserCircle
          size={26}
          className="mr-[1.625em]"
          color={currentTheme.onBackground}
        />
      ),
      onClick: () => console.log("Resume Button Clicked!"),
    },
    {
      text: "Contact",
      icon: (
        <LuMessagesSquare
          size={26}
          className="mr-[1.625em]"
          color={currentTheme.onBackground}
        />
      ),
      onClick: () => console.log("Contact Button Clicked!"),
    },
  ];
  // -------------------------------------------------------------------------

  return (
    <div className="h-screen items-baseline flex flex-col pb-[3.125em] w-[17%]">
      {/*Duck Logo*/}
      <div className="mt-[3.125em] mb-[2.19em]">
        <img src="/duck-logo.png" alt="Duck Logo" width={32} />
      </div>
      {/* About-Projects-Resume-Contact Buttons*/}
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
