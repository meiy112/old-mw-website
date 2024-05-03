import { useTheme } from "@mui/material/styles";

interface TwitterUserProps {
  pfp: string;
  username: string;
  at: string;
  isVerified: boolean;
  onClick: () => void;
}

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
        <Username username={username} at={at} isVerified={isVerified} />
      </div>
      <VisitButton isVerified={isVerified} onClick={onClick} />
    </div>
  );
}

function ProfilePicture({ pfp }: { pfp: string }) {
  return <img src={pfp} className="rounded-[50%] w-[3.1vw] h-[3.1vw]" />;
}

function Username({
  username,
  at,
  isVerified,
}: {
  username: string;
  at: string;
  isVerified: boolean;
}) {
  return (
    <div className="flex flex-col content-between">
      <div className="flex flex-row gap-x-[0.3rem]">
        <h1 className="tracking-[0.4px] font-bold text-[0.923rem] h-[1.5em]">
          {username}
        </h1>
        {isVerified ? (
          <img src="/verified-check.png" className="size-[1.5em]" />
        ) : null}
      </div>
      <span className="text-[0.86rem] opacity-50 font-regular tracking-[0.4px]">
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
