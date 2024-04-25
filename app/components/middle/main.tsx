import { useTheme } from "@/app/page";

export default function Main() {
  const currentTheme = useTheme();
  return (
    <div
      className="h-screen"
      style={{
        borderLeft: `0.5px solid ${currentTheme.border}`,
        borderRight: `0.5px solid ${currentTheme.border}`,
        width: "100%",
      }}
    ></div>
  );
}
