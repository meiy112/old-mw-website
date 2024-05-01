import { useTheme } from "@mui/material/styles";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import {
  LuPin,
  LuHeart,
  LuMessageCircle,
  LuBarChart3,
  LuLink,
} from "react-icons/lu";

export default function Post({
  isPinned,
  date,
  title,
  typeOf,
  body,
  image,
  link,
  anchor,
}: {
  isPinned: boolean;
  date: string;
  title: string;
  typeOf: string;
  body: string[];
  image: string;
  link: string;
  anchor: string;
}) {
  return (
    <div className="flex flex-col">
      {isPinned ? <Pin /> : null}
      <Profile date={date} />
      <div className="pl-[0.75vw] pr-[0.75vw]">
        <Title title={title} typeOf={typeOf} />
        <Body body={body} />
      </div>
      <Picture image={image} />
      <Footer link={link} anchor={anchor} />
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
          <span className="text-[1rem] font-bold">MWeng</span>
          <Emoji unified="1f4ab" size={17} emojiStyle={EmojiStyle.APPLE} />
          <img src="verified-check.png" className="size-[1.5rem]" />
        </div>
        <div className="text-[0.9rem] opacity-[0.5]">{date}</div>
      </div>
    </div>
  );
}

function Title({ title, typeOf }: { title: string; typeOf: string }) {
  const getTag = ({ typeOf }: { typeOf: string }) => {
    switch (typeOf) {
      case "About Me":
        return <Tag title="About Me" unicode="1f9cb" />;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-row items-center pt-[1.9vh] pb-[0.3vh] gap-x-[0.9vw]">
      <h1 className="font-extrabold text-[1.6rem] tracking-[0.32px]">
        {title}
      </h1>
      {getTag({ typeOf })}
    </div>
  );
}

function Tag({ title, unicode }: { title: string; unicode: string }) {
  const theme = useTheme();
  return (
    <div
      className="rounded-[30rem] px-[0.91vw] py-[0.5vh] justify-center items-center flex flex-row gap-x-[0.2vw]"
      style={{ backgroundColor: theme.palette.primary.main }}
    >
      <span className="font-bold text-[0.73rem]">{title}</span>
      <Emoji unified={unicode} size={17} emojiStyle={EmojiStyle.APPLE} />
    </div>
  );
}

function Body({ body }: { body: string[] }) {
  return (
    <ul className="flex flex-col items-start gap-y-[2.5vh] pb-[2vh]">
      {body.map((item, index) => (
        <li key={index} className="text-[0.93rem] tracking-[0.32px]">
          {item}
        </li>
      ))}
    </ul>
  );
}

function Picture({ image }: { image: string }) {
  return <img src={image} className="w-[100%] h-[53vh] rounded-[12px]" />;
}

function Footer({ link, anchor }: { link: string; anchor: string }) {
  const theme = useTheme();
  return (
    <div className="flex flex-row justify-between py-[2vh] px-[0.1vw]">
      <div className="flex flex-row gap-x-[1.9vw]">
        <LuHeart size={24} />
        <LuMessageCircle size={24} />
        <LuBarChart3 size={24} />
      </div>
      {link ? (
        <div className="flex flex-row gap-x-[0.5vw]">
          <LuLink size={24} className="opacity-[0.5]" />
          <a
            href={link}
            className="text-[0.9rem]"
            style={{ color: theme.palette.primary.light }}
          >
            {anchor}
          </a>
        </div>
      ) : null}
    </div>
  );
}
