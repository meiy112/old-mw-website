import { useTheme } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { usePageContext } from "../context/PageProvider";

export default function NavBar() {
  const { currentPage, setCurrentPage } = usePageContext();

  const theme = useTheme();
  const buttonData = [
    { title: "About", onClick: () => setCurrentPage("About") },
    {
      title: "Projects",
      onClick: () => setCurrentPage("Projects"),
    },
    { title: "Resume", onClick: () => setCurrentPage("Resume") },
    {
      title: "Drawings",
      onClick: () => setCurrentPage("Drawings"),
    },
  ];
  const [linePosition, setLinePosition] = useState<number | null>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLinePosition = () => {
      const activeButtonElement = document.querySelector(
        `button[aria-current="page"]`
      ) as HTMLElement;
      if (activeButtonElement && lineRef.current) {
        const { offsetLeft, offsetWidth } = activeButtonElement;

        const lineCenterPosition = offsetLeft + offsetWidth / 2 - 36;

        setLinePosition(lineCenterPosition);
      }
    };

    updateLinePosition();

    window.addEventListener("resize", updateLinePosition);

    return () => {
      window.removeEventListener("resize", updateLinePosition);
    };
  }, [currentPage]);

  return (
    <nav
      className={`flex flex-row justify-between pr-[6.4vw] pl-[6.4vw] h-[4.9vh] items-start`}
    >
      {buttonData.map((button, index) => (
        <NavButton
          key={index}
          title={button.title}
          onClick={button.onClick}
          currentPage={currentPage}
        />
      ))}
      <div className="absolute left-0 h-[4.9vh]">
        <div
          ref={lineRef}
          className="absolute w-[72px] h-[4.8px] bottom-0"
          style={{
            left: linePosition ?? "25.5vw",
            backgroundColor: theme.palette.primary.main,
            transition: "left 0.3s ease",
          }}
        />
      </div>
    </nav>
  );
}

function NavButton({
  title,
  onClick,
  currentPage,
}: {
  title: string;
  onClick: () => void;
  currentPage: string;
}) {
  return (
    <button
      onClick={onClick}
      className="font-bold tracking-[0.32px] text-[1rem]"
      style={currentPage === title ? { opacity: 1 } : { opacity: 0.5 }}
      aria-current={currentPage === title ? "page" : undefined}
    >
      {title}
    </button>
  );
}
