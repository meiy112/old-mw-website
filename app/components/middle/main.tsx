import { useTheme } from "@mui/material/styles";

export default function Main() {
  const theme = useTheme();
  return (
    <div
      className="h-screen w-[54.5%]"
      style={{
        borderLeft: `1px solid ${theme.palette.divider}`,
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    ></div>
  );
}
