import { useTheme } from "@mui/material/styles";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { motion } from "framer-motion";
import {
  LuPin,
  LuHeart,
  LuMessageCircle,
  LuBarChart3,
  LuLink,
  LuMoreHorizontal,
} from "react-icons/lu";

export default function Post({
  postKey,
  isPinned,
  date,
  title,
  typeOf,
  body,
  image,
  link,
  anchor,
  onClick,
}: {
  postKey: string;
  isPinned: boolean;
  date: string;
  title: string;
  typeOf: string;
  body: React.ReactNode[];
  image: string;
  link: string;
  anchor: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      onClick={onClick}
      className="mb-[3vh] flex flex-col rounded-[20px] p-[2vw] hoverable"
      layoutId={`post-${postKey}`}
    >
      {isPinned ? <Pin /> : null}
      <Profile date={date} />
      <div className="px-[0.6vw]">
        <Title title={title} typeOf={typeOf} />
        <Body body={body} />
      </div>
      <Picture image={image} />
      <Footer link={link} anchor={anchor} />
    </motion.div>
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
    <div className="flex flex-row gap-x-[1vw] w-[100%]">
      <img src="/pfp.jpg" className="rounded-[50%] w-[3.1vw] h-[3.1vw]" />
      <div className="flex flex-col justify-between w-[100%]">
        <div className="flex flex-row items-center justify-between w-[100%]">
          <div className="flex flex-row gap-x-[5px] items-center">
            <span className="text-[1rem] font-bold">MWeng</span>
            <Emoji unified="1f4ab" size={17} emojiStyle={EmojiStyle.APPLE} />
            <img src="verified-check.png" className="size-[1.5rem]" />
          </div>
          <LuMoreHorizontal size={24} />
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
        return <Tag title="About Me" unicode="1f680" />;
      case "Mobile App":
        return <Tag title="Mobile App" unicode="1f4f1" />;
      case "Web App":
        return <Tag title="Web App" unicode="1f4bb" />;
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
      <span className="font-bold text-[0.75rem]">{title}</span>
      <Emoji unified={unicode} size={17} emojiStyle={EmojiStyle.APPLE} />
    </div>
  );
}

function Body({ body }: { body: React.ReactNode[] }) {
  return (
    <ul className="text-[0.925rem] tracking-[0.32px] flex flex-col items-start gap-y-[2.5vh] pb-[2vh] leading-[1.5em]">
      {body.map((item, index) => (
        <li key={index}>{item}</li>
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
    <div className="flex flex-row justify-between pt-[2vh] px-[0.1vw]">
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
