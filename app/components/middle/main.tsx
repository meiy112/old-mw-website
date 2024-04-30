import { useTheme } from "@mui/material/styles";
import ProfileHeader from "./ProfileHeader";
import PostsContent from "./PostsContent";

export default function Main() {
  const theme = useTheme();
  return (
    <div
      className="h-[100%] w-[100%] pt-[3.125em] flex flex-col"
      style={{
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <ProfileHeader />
      <PostsContent />
    </div>
  );
}
