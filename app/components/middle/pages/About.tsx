import NavLink from "../../misc/NavLink";
import Post from "../Post";

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
