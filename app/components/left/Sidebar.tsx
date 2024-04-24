"use client";
import { LuDog } from "react-icons/lu";
import SideButton from "./SideButton";
import { HiOutlineHome } from "react-icons/hi";
import { TiFolderOpen } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { MdOutlineChat } from "react-icons/md";

//Left sidebar with logo + settings
export default function Sidebar() {
  const handleAboutClick = () => {
    console.log("About Button Clicked!");
  };
  const handleProjectClick = () => {
    console.log("Project Button Clicked!");
  };
  const handleResumeClick = () => {
    console.log("Resume Button Clicked!");
  };
  const handleContactClick = () => {
    console.log("Contact Button Clicked!");
  };

  return (
    <div
      className="justify-start h-screen items-baseline flex flex-col"
      style={{ width: 50 }}
    >
      <div style={{ marginLeft: -6, marginTop: 20 }}>
        <LuDog size={40} style={{ marginBottom: 20 }} />
      </div>
      <SideButton
        onClick={handleAboutClick}
        text={"About"}
        icon={<HiOutlineHome style={{ marginRight: 15 }} size={28} />}
      />
      <SideButton
        onClick={handleProjectClick}
        text={"Projects"}
        icon={<TiFolderOpen style={{ marginRight: 15 }} size={28} />}
      />
      <SideButton
        onClick={handleResumeClick}
        text={"Resume"}
        icon={<CgProfile style={{ marginRight: 15 }} size={28} />}
      />
      <SideButton
        onClick={handleContactClick}
        text={"Contact"}
        icon={<MdOutlineChat style={{ marginRight: 15 }} size={28} />}
      />
    </div>
  );
}
