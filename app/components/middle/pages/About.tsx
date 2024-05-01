import Post from "../Post";

export default function About() {
  return (
    <div className="p-[1.9vw]">
      <Post
        isPinned={true}
        date={"April 30 2024"}
        title={"Hello World!"}
        typeOf={"About Me"}
        body={[
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          "I’ll leave this post off with a passage from one of my all-time favourite plays:",
          "“Lets go.” “We can’t.” “Why not?” “We’re waiting for Godot.”",
        ]}
        image={"/images/pinned-post.jpg"}
        anchor={"wiki.com/Waiting_for_Godot"}
        link={"https://en.wikipedia.org/wiki/Waiting_for_Godot"}
      />
    </div>
  );
}
