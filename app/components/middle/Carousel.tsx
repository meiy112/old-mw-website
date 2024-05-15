import {
  AndroidstudioOriginal,
  BlenderOriginal,
  COriginal,
  CplusplusOriginal,
  CsharpOriginal,
  Css3Original,
  ExpressOriginal,
  FigmaOriginal,
  FlaskOriginal,
  FramermotionOriginal,
  GithubOriginal,
  Html5Original,
  IntellijOriginal,
  JavaOriginal,
  JavascriptOriginal,
  JunitOriginal,
  MongodbOriginalWordmark,
  MongooseOriginal,
  MysqlOriginal,
  NextjsOriginal,
  NodejsOriginal,
  PhotoshopOriginal,
  PostmanOriginal,
  PythonOriginal,
  ReactOriginal,
  TailwindcssOriginal,
  TypescriptOriginal,
  VercelOriginal,
  VscodeOriginal,
  DockerOriginal,
  SpringOriginal,
} from "devicons-react";
import {
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  motion,
  useAnimationFrame,
  wrap,
} from "framer-motion";
import { useRef } from "react";

const iconSize = 32;

const itemData = [
  {
    icon: <PostmanOriginal size={iconSize} style={{ opacity: 0.7 }} />,
  },
  {
    icon: <PythonOriginal size={iconSize} style={{ opacity: 0.7 }} />,
  },
  {
    icon: <ReactOriginal size={iconSize} style={{ opacity: 0.7 }} />,
  },
  {
    icon: <TailwindcssOriginal size={iconSize} style={{ opacity: 0.7 }} />,
  },
  {
    icon: <TypescriptOriginal size={iconSize} style={{ opacity: 0.7 }} />,
  },
  {
    icon: <VercelOriginal size={iconSize} />,
  },
  {
    icon: <VscodeOriginal size={iconSize} style={{ opacity: 0.7 }} />,
  },
  {
    icon: <DockerOriginal size={iconSize} />,
  },
  {
    icon: <AndroidstudioOriginal size={iconSize} style={{ opacity: 0.7 }} />,
  },
  {
    icon: <BlenderOriginal size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <SpringOriginal size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <COriginal size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <CplusplusOriginal size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <CsharpOriginal size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <Css3Original size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <ExpressOriginal size={iconSize} />,
  },
  {
    icon: <FigmaOriginal size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <FramermotionOriginal size={iconSize} />,
  },
  {
    icon: <FlaskOriginal size={iconSize} />,
  },
  {
    icon: <GithubOriginal size={iconSize} />,
  },
  {
    icon: <Html5Original size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <IntellijOriginal size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <JavaOriginal size={iconSize} />,
  },
  {
    icon: <JavascriptOriginal size={iconSize} />,
  },
  {
    icon: <JunitOriginal size={iconSize} />,
  },
  {
    icon: <MongodbOriginalWordmark size={iconSize} />,
  },
  {
    icon: <MongooseOriginal size={iconSize} />,
  },
  {
    icon: <MysqlOriginal size={iconSize} />,
  },
  {
    icon: <NextjsOriginal size={iconSize} />,
  },
  {
    icon: <NodejsOriginal size={iconSize} />,
  },
  {
    icon: <PhotoshopOriginal size={iconSize} />,
  },
];

export default function Carousel() {
  console.log(itemData);
  return (
    <div className="gap-x-[10px] flex flex-row rounded-[15px] w-[100%] overflow-hidden">
      {itemData.map((item, index) => (
        <CarouselItem icon={item.icon} key={index} />
      ))}
    </div>
  );
}

function CarouselItem({ icon }: { icon: any }) {
  return (
    <div className="glass-container-2 w-[48px] h-[48px] rounded-[50%] flex">
      <div className="w-[48px] h-[48px] flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}
