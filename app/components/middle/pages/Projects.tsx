import { Emoji } from "emoji-picker-react";
import Post from "../Post";

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
  return (
    <div className="p-[1vw] mt-[1.5vh]">
      {postContent.map((post, index) => (
        <Post
          key={index}
          isPinned={post.isPinned}
          date={post.date}
          title={post.title}
          typeOf={post.typeOf}
          body={post.body}
          image={post.image}
          anchor={post.anchor}
          link={post.link}
          onClick={() => console.log("haha")}
        />
      ))}
    </div>
  );
}
