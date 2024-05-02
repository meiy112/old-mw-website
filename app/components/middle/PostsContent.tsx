import NavBar from "./NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";
import Resume from "./pages/Resume";
import Drawings from "./pages/Drawings";
import { Raleway } from "next/font/google";
import { usePageContext } from "../context/PageProvider";

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
    </div>
  );
}
