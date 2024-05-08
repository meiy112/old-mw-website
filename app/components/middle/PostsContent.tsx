import NavBar from "./NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Drawings from "./pages/Drawings";
import { Raleway } from "next/font/google";
import { usePageContext } from "../context/PageProvider";
import { LuCopyright, LuContainer, LuCode2, LuMusic4 } from "react-icons/lu";
import { AnimatePresence, useInView } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import { Dispatch, ReactNode, SetStateAction, useRef } from "react";

const raleway = Raleway({ subsets: ["latin"] });

export default function PostsContent({
  setIsModalOpen,
}: {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { currentPage } = usePageContext();

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About setIsModalOpen={setIsModalOpen} />;
      case "Projects":
        return <Projects />;
      case "Resume":
        return <Resume />;
      case "Drawings":
        return <Drawings />;
      default:
        return <About setIsModalOpen={setIsModalOpen} />;
    }
  };
  return (
    <div className={`${raleway.className}`}>
      <NavBar />
      <AnimatePresence mode="wait">{renderPage()}</AnimatePresence>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col px-[2vw]">
      <WebsiteDescription />
      <div className=" flex justify-center mt-[7vh] mb-[5vh] opacity-[0.7] text-[0.75rem] font-light">
        <div className="px-[1em] flex flex-row items-center gap-x-[5px] rounded-[10em] py-[0.2em] glass-container-2">
          mweng <LuCopyright /> 2024
        </div>
      </div>
    </div>
  );
}

function WebsiteDescription() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        className="flex flex-col mb-[4vh] gap-y-[1.25rem]"
        style={{
          transform: isInView ? "none" : "translateX(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        <Ornament />
        <h1 className="font-regular px-[1em] text-[0.8rem] opacity-[0.5]">
          This website was built with...
        </h1>
        <div className="px-[1em] flex flex-row gap-x-[5vw] opacity-[0.85]">
          <List
            listItems={[
              "Typescript",
              "+ Next.js",
              "+ Tailwind.css",
              "+ Framer motion",
              "+ Node.js",
            ]}
            icon={<LuContainer />}
          />
          <List
            listItems={[
              "29 files",
              "+ 420 lines of code",
              "+ 69 hours of coding",
              "+ 18 cups of coffee",
              "+ 36 commits",
            ]}
            icon={<LuCode2 />}
          />
          <List
            listItems={[
              "Random Song",
              "Song 2",
              "Another Song",
              "Basically Music",
              "Yea Thats About It",
            ]}
            icon={<LuMusic4 />}
          />
        </div>
        {/*<h1 className="mt-[4em] self-end font-regular px-[1em] text-[0.8rem] opacity-[0.5]">
          ...thanks again for stopping by!
        </h1>*/}
      </div>
    </section>
  );
}

function List({ listItems, icon }: { listItems: string[]; icon: ReactNode }) {
  const theme = useTheme();
  return (
    <div
      className="font-medium flex flex-col gap-y-[1.8em] opacity-[0.45]"
      style={{ color: theme.palette.primary.light }}
    >
      {icon}
      <div className="flex flex-col text-[0.75rem] gap-y-[0.4em]">
        {listItems.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function Ornament() {
  const theme = useTheme();
  return (
    <div className="relative w-[10vw] h-[10vh]">
      <div className="absolute top-4 size-[18vh]">
        {theme.palette.mode === "dark" ? (
          <img alt="" src="/footer-ornament.png" />
        ) : (
          <img alt="" src="/footer-ornament.png" />
        )}
      </div>
    </div>
  );
}
