import { useTheme } from "@mui/material/styles";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { LuPin } from "react-icons/lu";

export default function Post({
  isPinned,
  date,
  title,
  typeOf,
}: {
  isPinned: boolean;
  date: string;
  title: string;
  typeOf: string;
}) {
  return (
    <div className="flex flex-col">
      {isPinned ? <Pin /> : null}
      <Profile date={date} />
      <div className="pl-[0.75vw] pr-[0.75vw]">
        <Title title={title} typeOf={typeOf} />
        <Content />
      </div>
      <Picture />
      <Footer />
    </div>
  );
}

function Pin() {
  return (
    <div className="flex flex-row items-center opacity-[0.5] gap-x-[12px] ml-[2.3vw] pb-[1vh]">
      {" "}
      <LuPin className="size-[1rem]" />
      <span className="text-[0.72rem]">Pinned (quack)</span>
    </div>
  );
}

function Profile({ date }: { date: string }) {
  return (
    <div className="flex flex-row gap-x-[1vw]">
      <img src="/pfp.jpg" className="rounded-[50%] w-[3.1vw] h-[3.1vw]" />
      <div className="flex flex-col justify-between">
        <div className="flex flex-row items-center gap-x-[5px]">
          <span className="text-[1rem] font-bold">MaggieW</span>
          <Emoji unified="1f4ab" size={17} emojiStyle={EmojiStyle.APPLE} />
          <img src="verified-check.png" className="size-[1.5rem]" />
        </div>
        <div className="text-[0.9rem] opacity-[0.5]">{date}</div>
      </div>
    </div>
  );
}

function Title({ title, typeOf }: { title: string; typeOf: string }) {
  const theme = useTheme();
  const getTag = ({ typeOf }: { typeOf: string }) => {
    switch (typeOf) {
      case "About Me":
        return (
          <div
            className="rounded-[30rem] w-[6.5vw] h-[3.2vh] justify-center items-center flex flex-row gap-x-[0.2vw]"
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            <span className="font-bold text-[0.73rem]">About Me</span>
            <Emoji unified="1f9cb" size={17} emojiStyle={EmojiStyle.APPLE} />
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-row items-center pt-[1.9vh] gap-x-[0.9vw]">
      <h1 className="font-bold text-[1.7rem] tracking-[0.32px]">{title}</h1>
      {getTag({ typeOf })}
    </div>
  );
}

function Content() {
  return <div>Stuff in the post</div>;
}

function Picture() {
  return <img src="" />;
}

function Footer() {
  return <div>Footer Section</div>;
}
