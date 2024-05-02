import { ReactNode } from "react";
import { usePageContext } from "../context/PageProvider";

interface SideButtonProps {
  onClick: () => void;
  text: string;
  icon: ReactNode;
}

export default function SideButton({ onClick, text, icon }: SideButtonProps) {
  const { currentPage } = usePageContext();

  return (
    <button
      onClick={onClick}
      className={`rounded-[30px] justify-start w-[13em] pl-[1.75vw] py-[15px] flex items-center ml-[0.3125em] nav-button ${
        currentPage === text ? "active" : ""
      }`}
      type="button"
    >
      {icon}
      <h1 className="font-medium text-[1.065rem] tracking-[0.32px]">{text}</h1>
    </button>
  );
}
