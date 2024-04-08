import Image from "next/image";
import Left from "./components/left";
import Main from "./components/main";
import Right from "./components/right";

export default function Home() {
  return (
    <main className="flex flex-row min-h-screen items-center justify-between p-24">
      {/*Settings + Logo*/}
      <Left />
      {/*Main middle content*/}
      <Main />
      {/*Contact + You Might Like*/}
      <Right />
    </main>
  );
}
