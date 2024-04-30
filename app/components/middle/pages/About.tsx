import Post from "../Post";

export default function About() {
  return (
    <div className="p-[1.7vw]">
      <Post
        isPinned={true}
        date={"April 30 2024"}
        title={"Hello World!"}
        typeOf={"About Me"}
      />
    </div>
  );
}
