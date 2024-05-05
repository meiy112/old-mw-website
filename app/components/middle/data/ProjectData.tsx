import { PostData } from "@/app/interfaces/Thread";

export const postContent: PostData[] = [
  {
    isPinned: true,
    date: "April 2024",
    title: "Study Shark",
    typeOf: ["Mobile App"],
    body: [
      <p>
        Study app that extracts key concepts from scanned notes and converts
        them into interactive quiz material.
      </p>,
    ],
    image: "/images/pinned-post.jpg",
    anchor: "github/study-shark",
    link: ".",
    thread: [
      {
        title: "Lorem Ipsum is kinda boring.",
        date: "April 2024",
        content: [
          {
            type: "paragraph",
            paragraph:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            type: "image",
            url: "/images/Projects/study-shark-1.jpg",
            description: "Description of the image above",
          },
          {
            type: "paragraph",
            paragraph:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          },
        ],
      },
    ],
  },
  {
    isPinned: false,
    date: "January 2024",
    title: "Pantry Planner",
    typeOf: ["Web App"],
    body: ["hi"],
    image: "/images/pinned-post.jpg",
    anchor: "github/pantry-planner",
    link: "https://github.com/andyh031/pantry-planner",
  },
  {
    isPinned: false,
    date: "December 2023",
    title: "AgileMind",
    typeOf: ["Web App"],
    body: ["hi"],
    image: "/images/pinned-post.jpg",
    anchor: "github/agilemind",
    link: "https://github.com/emmah47/AgileMind",
  },
  {
    isPinned: false,
    date: "March 2024",
    title: "InsightUBC API & CampusExplorer",
    typeOf: ["Web App"],
    body: ["hi"],
    image: "/images/pinned-post.jpg",
    anchor: "github/insightubc",
    link: ".",
  },
  {
    isPinned: false,
    date: "July 2023",
    title: "FinStatPro",
    typeOf: ["Web App"],
    body: ["hi"],
    image: "/images/pinned-post.jpg",
    anchor: "github/finstatpro",
    link: "https://github.com/andyh031/pantry-planner",
  },
];
