"use client";
import SideButton from "./SideButton";
import {
  LuMessageSquare,
  LuHome,
  LuFolderOpen,
  LuUserCircle,
  LuPencilLine,
} from "react-icons/lu";
import DisplayToggle from "./DisplayToggle";
import { usePageContext } from "../context/PageProvider";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

type ToggleThemeFunction = () => void;

export default function Sidebar({
  toggleTheme,
  setIsModalOpen,
}: {
  toggleTheme: ToggleThemeFunction;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { setCurrentPage } = usePageContext();
  // ------------------------------ button data ------------------------------
  function scrollToNavbar() {
    const navbarElement = document.getElementById("navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  const buttonData = [
    {
      text: "About",
      icon: <LuHome size={26} className="mr-[1.625vw]" />,
      onClick: () => {
        setCurrentPage("About");
        scrollToNavbar();
      },
    },
    {
      text: "Projects",
      icon: <LuFolderOpen size={26} className="mr-[1.625vw]" />,
      onClick: () => {
        setCurrentPage("Projects");
        scrollToNavbar();
      },
    },
    {
      text: "Resume",
      icon: <LuUserCircle size={26} className="mr-[1.625vw]" />,
      onClick: () => {
        setCurrentPage("Resume");
        scrollToNavbar();
      },
    },
    {
      text: "Blog",
      icon: <LuPencilLine size={26} className="mr-[1.625vw]" />,
      onClick: () => {
        setCurrentPage("Blog");
        scrollToNavbar();
      },
    },
    {
      text: "Contact",
      icon: <LuMessageSquare size={26} className="mr-[1.625vw]" />,
      onClick: () => {
        setIsModalOpen(true);
      },
    },
  ];
  // -------------------------------------------------------------------------

  return (
    <div className="sidebar fixed h-screen items-baseline flex flex-col pb-[6vh] gap-y-[0.5em]">
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
      <Image src="/duck-logo.png" alt="Duck Logo" width={32} height={32} />
    </div>
  );
}
