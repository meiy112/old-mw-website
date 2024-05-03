import { useState } from "react";
import NavLink from "../../misc/NavLink";
import Post from "../Post";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import ModalPost from "../../misc/ModalPost";

const postContent = [
  {
    isPinned: true,
    date: "April 30 2024",
    title: "Hello World!",
    typeOf: "About Me",
    body: [
      <p key={0}>
        Welcome to my corner of the web! This is where I'll be sharing updates
        on my latest projects, creative endeavors, and insights into my personal
        journey.
      </p>,
      <p key={1}>
        If you're curious about my work, check out{" "}
        <NavLink name="Projects" tab="Projects" /> to see what I've been up to
        or explore my <NavLink name="Resume" tab="Resume" /> to learn more about
        my experience. Feel free to get in touch via{" "}
        <NavLink name="Contact" tab="Contact" /> if you have any questions or
        want to connect!
      </p>,
      <p key={2}>
        I’ll leave this post off with a passage from one of my all-time
        favourite plays:
      </p>,
      <p key={3}>
        “Let's go.” “We can't.” “Why not?” “We're waiting for Godot.”
      </p>,
    ],
    image: "/images/pinned-post.jpg",
    anchor: "wiki.com/Waiting_for_Godot",
    link: "https://en.wikipedia.org/wiki/Waiting_for_Godot",
  },
  {
    isPinned: false,
    date: "May 2 2024",
    title: "Want to Learn Code?",
    typeOf: "About Me",
    body: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    image: "/images/tutor-post.jpg",
    anchor: "/thecodeiniative.ca",
    link: "https://www.thecodeinitiative.ca/",
  },
];

export default function About() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const closeModal = () => {
    setModalIndex(null);
  };

  return (
    <div className="p-[1vw] mt-[1.5vh]">
      <LayoutGroup>
        {postContent.map((post, index) => (
          <Post
            key={index}
            index={index}
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
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              className="bg-white opacity-[0.2] fixed top-0 right-0 bottom-0 left-0"
              style={{ backdropFilter: "blur(10px)" }}
            />
          )}

          {/* Modal content */}
          {modalIndex !== null && (
            <ModalPost
              key={modalIndex}
              layoutId={`post-${modalIndex}`}
              {...postContent[modalIndex]}
              onClick={closeModal}
            />
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
}
