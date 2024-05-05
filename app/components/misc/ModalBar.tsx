import { useTheme } from "@mui/material/styles";
import { Emoji } from "emoji-picker-react";
import { Variants, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LuX } from "react-icons/lu";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: {
    opacity: 0,
    scale: 0.3,
    transition: { duration: 0.4 },
  },
};

export default function ModalBar({ onClick }: { onClick: () => void }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseButtonClick = () => {
    onClick();
    setIsModalOpen(false);
  };

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className="relative mt-[5vh] w-[55px]">
      <motion.div className="flex flex-col gap-y-[16px] absolute top-0 left-0">
        <CloseButton onClick={onCloseButtonClick} />
        <ReactionBar isModalOpen={isModalOpen} />
      </motion.div>
    </div>
  );
}

function CloseButton({ onClick }: { onClick: () => void }) {
  const theme = useTheme();

  return (
    <motion.button
      className="size-[55px] flex items-center justify-center rounded-[23px]"
      onClick={onClick}
      style={{ backgroundColor: theme.palette.background.default }}
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <LuX size={22} />
    </motion.button>
  );
}

function ReactionBar({ isModalOpen }: { isModalOpen: boolean }) {
  const theme = useTheme();

  return (
    <motion.nav animate={isModalOpen ? "open" : "closed"} initial="closed">
      <motion.div
        className="justify-center items-center rounded-[23px] w-[100%] py-[25px] gap-y-[23px] flex flex-col"
        style={{
          backgroundColor: theme.palette.background.default,
        }}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            x: 0,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.8,
              delayChildren: 0.5,
              staggerChildren: 0.1,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            x: -50,
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.4,
            },
          },
        }}
      >
        <motion.button variants={itemVariants}>
          <Emoji unified="1f970" size={28} />
        </motion.button>
        <motion.button variants={itemVariants}>
          <Emoji unified="1f929" size={28} />
        </motion.button>
        <motion.button variants={itemVariants}>
          <Emoji unified="1f62e" size={28} />
        </motion.button>
        <motion.button variants={itemVariants}>
          <Emoji unified="1f986" size={28} />
        </motion.button>
        <motion.button variants={itemVariants}>
          <Emoji unified="1f389" size={28} />
        </motion.button>
        <motion.button variants={itemVariants}>
          <Emoji unified="1f604" size={28} />
        </motion.button>
        <motion.button variants={itemVariants}>
          <Emoji unified="1f90c" size={28} />
        </motion.button>
      </motion.div>
    </motion.nav>
  );
}
