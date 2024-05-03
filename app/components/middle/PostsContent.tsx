import NavBar from "./NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Drawings from "./pages/Drawings";
import { Raleway } from "next/font/google";
import { usePageContext } from "../context/PageProvider";
import { LuCopyright } from "react-icons/lu";

const raleway = Raleway({ subsets: ["latin"] });

export default function PostsContent() {
  const { currentPage } = usePageContext();

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Resume":
        return <Resume />;
      case "Drawings":
        return <Drawings />;
      default:
        return <About />;
    }
  };
  return (
    <div className={`${raleway.className}`}>
      <NavBar />
      {renderPage()}
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-row justify-center items-center mt-[7vh] mb-[5vh] gap-x-[5px] opacity-[0.5] text-[0.8rem] font-light">
      mweng <LuCopyright /> 2024
    </div>
  );
}
