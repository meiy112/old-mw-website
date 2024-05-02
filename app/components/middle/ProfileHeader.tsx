import { useTheme } from "@mui/material/styles";
import { PiEnvelopeSimpleBold } from "react-icons/pi";
import { Raleway } from "next/font/google";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { LuMapPin, LuCalendarDays, LuUsers2, LuLink } from "react-icons/lu";

const raleway = Raleway({ subsets: ["latin"] });

export default function ProfileHeader() {
  return (
    <div className="h-auto pb-[6vh] w-[100%]">
      <Banner />
      <div className="flex-row flex justify-between px-[4.5vw] pb-[1vh]">
        <ProfilePicture />
        <ContactButton />
      </div>
      <Bio />
    </div>
  );
}

function Banner() {
  return (
    <div className="overflow-hidden w-[100%] h-[28vh]">
      <img src="/banner.jpg" className="w-[100%] mt-[-46vh]" />
    </div>
  );
}

function ProfilePicture() {
  const theme = useTheme();
  return (
    <div className="mt-[-78px]">
      <div
        className="absolute w-[156px] h-[156px] rounded-[50%]"
        style={{
          backgroundColor: `${theme.palette.background.default}`,
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
        }}
      ></div>
      <img
        src="/pfp.jpg"
        className="relative rounded-[50%] w-[148px] h-[148px] ml-[4px] mt-[4px]"
      />
    </div>
  );
}

function ContactButton() {
  const theme = useTheme();

  const onClick = () => {
    console.log("contact button clicked TEEHEE TEEHEE");
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex flex-row font-bold w-[8.5em] h-[2.9em] items-center justify-center rounded-[10em] text-[0.97rem] tracking-[0.32px] gap-x-[4px] mt-[2.8vh]"
      style={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      Contact
      <PiEnvelopeSimpleBold className="size-[1.3rem]" />
    </button>
  );
}

function Bio() {
  return (
    <div
      className={`flex flex-col px-[4.3vw] pt-[1.5vh] ${raleway.className} gap-y-[13px]`}
    >
      <BioHeader />
      <BioDescription />
      <BioDetails />
    </div>
  );
}

function BioHeader() {
  return (
    <div className="flex flex-row items-center gap-x-[9px]">
      <h1 className="font-extrabold text-[2.25rem]">Hi, I'm Maggie Weng</h1>
      <img src="/verified-check.png" className="size-[1.5em]" />
    </div>
  );
}

function BioDescription() {
  return (
    <div className="font-medium tracking-[0.32px] text-[0.91rem] gap-y-[15px] flex flex-col">
      <div className="flex gap-x-[5px] items-center">
        <span>... and this isn't X/Twitter.</span>
        <Emoji unified="1f609" size={24} emojiStyle={EmojiStyle.APPLE} />
      </div>
      <div>
        UBC CompSci Student. Programmer. UI/UX Graphic Designer. Digital Artist.
        Python Tutor. Casual Hiker. All-Nighter Puller. Duck Enthusiast.
      </div>
    </div>
  );
}

function BioDetails() {
  const theme = useTheme();
  return (
    <div className="mt-[0.6vh] flex flex-row gap-x-[15px] font-regular text-[0.93rem]">
      <div className="flex items-center gap-x-[4px] opacity-[50%]">
        <LuMapPin className="size-[1.2rem]" />
        <span>U of British Columbia</span>
      </div>
      <div className="flex items-center gap-x-[5px] opacity-[50%]">
        <LuCalendarDays className="size-[1.3rem]" /> <span>2nd Year</span>
      </div>
      <div className="flex items-center gap-x-[5px] opacity-[50%]">
        <LuUsers2 className="size-[1.3rem]" /> <span>Coop</span>
      </div>
      <div className="flex items-center gap-x-[5px]">
        <LuLink className="size-[1.2rem] opacity-[50%]" />
        <span style={{ color: theme.palette.primary.light }}>
          maggie.weng112@gmail.com
        </span>
      </div>
    </div>
  );
}
