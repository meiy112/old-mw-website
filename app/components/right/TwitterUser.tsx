import { useTheme } from "@mui/material/styles";

interface TwitterUserProps {
  pfp: string;
  username: string;
  at: string;
  isVerified: boolean;
  onClick: () => void;
}

// Linkedin, Github, Dog
export default function TwitterUser({
  pfp,
  username,
  at,
  isVerified,
  onClick,
}: TwitterUserProps) {
  return (
    <div className="flex-row flex items-center justify-between">
      <div className="flex-row flex items-center gap-x-[1.05em]">
        <ProfilePicture pfp={pfp} />
        <Username username={username} at={at} />
      </div>
      <VisitButton isVerified={isVerified} onClick={onClick} />
    </div>
  );
}

function ProfilePicture({ pfp }: { pfp: string }) {
  return <img src={pfp} className="rounded-[50%] w-[3.05em] h-[3.05em]" />;
}

function Username({ username, at }: { username: string; at: string }) {
  const theme = useTheme();
  return (
    <div className="flex flex-col content-between">
      <h1
        style={{ color: theme.palette.primary.contrastText }}
        className="tracking-[0.4px] font-bold text-[0.925rem] h-[1.5em]"
      >
        {username}
      </h1>
      <span
        style={{ color: theme.palette.primary.contrastText }}
        className="text-[0.86rem] opacity-50 font-regular tracking-[0.4px]"
      >
        {at}
      </span>
    </div>
  );
}

function VisitButton({
  isVerified,
  onClick,
}: {
  isVerified: boolean;
  onClick: () => void;
}) {
  const theme = useTheme();
  return (
    <button
      className="flex items-center justify-center rounded-[2em] w-[5.5em] h-[2.2em] font-bold text-[0.87rem] tracking-[0.32px]"
      style={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
      }}
      type="button"
      onClick={onClick}
    >
      {isVerified ? "Pet" : "Visit"}
    </button>
  );
}
