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
    icon: <PostmanOriginal size={iconSize} />,
  },
  {
    icon: <PythonOriginal size={iconSize} />,
  },
  {
    icon: <ReactOriginal size={iconSize} />,
  },
  {
    icon: <TailwindcssOriginal size={iconSize} />,
  },
  {
    icon: <TypescriptOriginal size={iconSize} />,
  },
  {
    icon: <VercelOriginal size={iconSize} />,
  },
  {
    icon: <VscodeOriginal size={iconSize} />,
  },
  {
    icon: <DockerOriginal size={iconSize} />,
  },
  {
    icon: <AndroidstudioOriginal size={iconSize} />,
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
  {
    icon: <PostmanOriginal size={iconSize} />,
  },
  {
    icon: <PythonOriginal size={iconSize} />,
  },
  {
    icon: <ReactOriginal size={iconSize} />,
  },
  {
    icon: <TailwindcssOriginal size={iconSize} />,
  },
  {
    icon: <TypescriptOriginal size={iconSize} />,
  },
  {
    icon: <VercelOriginal size={iconSize} />,
  },
  {
    icon: <VscodeOriginal size={iconSize} />,
  },
  {
    icon: <DockerOriginal size={iconSize} />,
  },
  {
    icon: <AndroidstudioOriginal size={iconSize} />,
  },
  {
    icon: <BlenderOriginal size={iconSize} className="opacity-[0.7]" />,
  },
  {
    icon: <SpringOriginal size={iconSize} className="opacity-[0.7]" />,
  },
];

export default function Carousel() {
  console.log(itemData);
  return (
    <div className="rounded-[15px] w-[708] overflow-hidden">
      <InfiniteScroll />
    </div>
  );
}

function InfiniteScroll() {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // 1860
  // 12
  const x = useTransform(baseX, (v) => `${wrap(-293.9, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * 15 * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <motion.div
      style={{ x }}
      className="w-[100%] h-[48px] flex flex-row gap-x-[12px]"
    >
      {itemData.map((item, index) => (
        <CarouselItem icon={item.icon} key={index} />
      ))}
    </motion.div>
  );
}

function CarouselItem({ icon }: { icon: any }) {
  return (
    <div className="glass-container-2 w-[48px] h-[48px] rounded-[15px] flex">
      <div className="w-[48px] h-[48px] flex items-center justify-center">
        {icon}
      </div>
    </div>
  );
}
