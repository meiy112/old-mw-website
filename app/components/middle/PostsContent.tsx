import NavBar from "./NavBar";
import { useRouter } from "next/router";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { useState } from "react";
import Resume from "./pages/Resume";
import Drawings from "./pages/Drawings";

export default function PostsContent() {
  const [currentPage, setCurrentPage] = useState("About");

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
    <div>
      <NavBar setPage={setCurrentPage} currentPage={currentPage} />
      {renderPage()}
    </div>
  );
}
