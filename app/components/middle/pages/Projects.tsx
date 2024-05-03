import Post from "../Post";

const postContent = [
  {
    isPinned: false,
    date: "April 2024",
    title: "Study Shark",
    typeOf: "Project",
    body: ["hi"],
    image: "/images/pinned-post.jpg",
    anchor: "wiki.com/Waiting_for_Godot",
    link: "https://en.wikipedia.org/wiki/Waiting_for_Godot",
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
        />
      ))}
    </div>
  );
}
