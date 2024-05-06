import { useTheme } from "@mui/material/styles";
import TwitterUser from "./TwitterUser";

const profileData = [
  {
    pfp: "/github-pfp.jpg",
    username: "My GitHub",
    at: "@meiy112",
    isVerified: false,
    onClick: function () {
      window.location.href = "https://github.com/meiy112";
      console.log("hi");
    },
  },
  {
    pfp: "/linkedin-pfp.jpg",
    username: "My Linkedin",
    at: "@mylinkedinacc",
    isVerified: false,
    onClick: function () {
      window.location.href =
        "https://www.linkedin.com/in/maggie-weng-97a9a526b/";
    },
  },
  {
    pfp: "/dog-pfp.jpg",
    username: "My Dog",
    at: "@javathedog",
    isVerified: true,
    onClick: function () {
      console.log("teehee dog petted");
    },
  },
];

// Container with "You Might Like" + Github, Linkedin
export default function Recommendations() {
  const theme = useTheme();
  return (
    <div className="glass-container-2 ml-[2.4em] rounded-[19px] p-[1.75em] pb-[2em] flex flex-col w-screen gap-y-[1.15em]">
      <Heading />
      {profileData.map((profile, index) => (
        <TwitterUser
          pfp={profile.pfp}
          username={profile.username}
          at={profile.at}
          isVerified={profile.isVerified}
          onClick={profile.onClick}
          key={profile.at}
        />
      ))}
    </div>
  );
}

function Heading() {
  const theme = useTheme();
  return (
    <p
      style={{ color: theme.palette.primary.contrastText }}
      className="font-bold tracking-[0.5px] text-[1.235rem]"
    >
      You might like
    </p>
  );
}
