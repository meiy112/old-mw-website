import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { PiEnvelopeSimpleBold } from "react-icons/pi";

export default function ContactButton({
  onClick,
}: {
  onClick: Dispatch<SetStateAction<boolean>>;
}) {
  const theme = useTheme();

  return (
    <div className="relative contact-button">
      <button
        type="button"
        onClick={() => onClick(true)}
        className=" overflow-hidden relative flex flex-row font-bold w-[8.5em] h-[2.9em] items-center justify-center rounded-[10em] text-[0.97rem] tracking-[0.32px] mt-[2.8vh]"
        style={{
          backgroundColor: theme.palette.primary.main,
          transition: "transform 0.4s",
        }}
      >
        <div className="gap-x-[4px] flex flex-row">
          Contact
          <PiEnvelopeSimpleBold className="size-[1.3rem]" />
          <div className="button__reflection-1"></div>
          <div className="button__reflection-2"></div>
        </div>
      </button>
      {theme.palette.mode === "dark" ? (
        <>
          <img alt="" src="/star-dark.png" className="button__star-1" />
          <img alt="" src="/star-dark.png" className="button__star-2" />
          <img alt="" src="/circle-dark.png" className="button__circle-1" />
          <img alt="" src="/circle-dark.png" className="button__circle-2" />
          <img alt="" src="/diamond-dark.png" className="button__diamond" />
          <img alt="" src="/triangle-dark.png" className="button__triangle" />
        </>
      ) : (
        <>
          <img alt="" src="/star.png" className="button__star-1" />
          <img alt="" src="/star.png" className="button__star-2" />
          <img alt="" src="/circle.png" className="button__circle-1" />
          <img alt="" src="/circle.png" className="button__circle-2" />
          <img alt="" src="/diamond.png" className="button__diamond" />
          <img alt="" src="/triangle.png" className="button__triangle" />
        </>
      )}
    </div>
  );
}
