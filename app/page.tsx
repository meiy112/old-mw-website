import Image from "next/image";
import Main from "./components/main";
import Right from "./components/right";
import Sidebar from "./components/left/Sidebar";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-center justify-between p-5">
      {/*Settings + Logo*/}
      <Sidebar />
      {/*Main middle content*/}
      <Main />
      {/*Contact + You Might Like*/}
      <Right />
    </main>
  );
}
