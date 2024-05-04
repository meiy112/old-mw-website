import { Emoji } from "emoji-picker-react";
import Post from "../Post";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import ModalPost from "../../misc/ModalPost";
import { useTheme } from "@mui/material/styles";

const postContent = [
  {
    isPinned: true,
    date: "April 2024",
    title: "Study Shark",
    typeOf: "Mobile App",
    body: [
      <p>
        Study app that extracts key concepts from scanned notes and converts
        them into interactive quiz material.
      </p>,
    ],
    image: "/images/pinned-post.jpg",
    anchor: "github/study-shark",
    link: ".",
  },
  {
    isPinned: false,
    date: "January 2024",
    title: "Pantry Planner",
    typeOf: "Web App",
    body: ["hi"],
    image: "/images/pinned-post.jpg",
    anchor: "github/pantry-planner",
    link: "https://github.com/andyh031/pantry-planner",
  },
  {
    isPinned: false,
    date: "December 2023",
    title: "AgileMind",
    typeOf: "Web App",
    body: ["hi"],
    image: "/images/pinned-post.jpg",
    anchor: "github/agilemind",
    link: "https://github.com/emmah47/AgileMind",
  },
  {
    isPinned: false,
    date: "March 2024",
    title: "InsightUBC API & CampusExplorer",
    typeOf: "Web App",
    body: ["hi"],
    image: "/images/pinned-post.jpg",
    anchor: "github/insightubc",
    link: ".",
  },
  {
    isPinned: false,
    date: "July 2023",
    title: "FinStatPro",
    typeOf: "Web App",
    body: ["hi"],
    image: "/images/pinned-post.jpg",
    anchor: "github/finstatpro",
    link: "https://github.com/andyh031/pantry-planner",
  },
];

export default function Projects() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const theme = useTheme();

  const closeModal = () => {
    setModalIndex(null);
  };

  useEffect(() => {
    if (modalIndex !== null) {
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }

    return () => {
      document.body.classList.remove("noscroll");
    };
  }, [modalIndex]);

  return (
    <motion.div
      className="p-[1vw] mt-[1.5vh]"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <LayoutGroup>
        {postContent.map((post, index) => (
          <Post
            key={"projects" + index}
            postKey={"projects" + index}
            isPinned={post.isPinned}
            date={post.date}
            title={post.title}
            typeOf={post.typeOf}
            body={post.body}
            image={post.image}
            anchor={post.anchor}
            link={post.link}
            onClick={() => setModalIndex(index)}
          />
        ))}

        <AnimatePresence>
          {/* Overlay */}
          {modalIndex !== null && (
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="block z-30 fixed inset-0"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: theme.palette.action.hover,
              }}
            />
          )}

          {/* Modal content */}
          {modalIndex !== null && (
            <ModalPost
              key={modalIndex}
              layoutId={`post-${"projects" + modalIndex}`}
              {...postContent[modalIndex]}
              onClick={closeModal}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}
