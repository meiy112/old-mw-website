import Right from "./components/right/right";
import Sidebar from "./components/left/Sidebar";
import Main from "./components/middle/main";

export default function Home() {
  return (
    <main
      className="flex flex-row min-h-screen items-center justify-between px-20"
      style={{ backgroundColor: "#151518" }}
    >
      {/*Navbar + Logo*/}
      <Sidebar />
      {/*Main middle content*/}
      <Main />
      {/*You Might Like*/}
      <Right />
    </main>
  );
}
