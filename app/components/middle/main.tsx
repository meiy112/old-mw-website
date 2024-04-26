import { useTheme } from "@/app/page";

export default function Main() {
  const currentTheme = useTheme();
  return (
    <div
      className="h-screen w-[54.5%]"
      style={{
        borderLeft: `1px solid ${currentTheme.border}`,
        borderRight: `1px solid ${currentTheme.border}`,
      }}
    ></div>
  );
}
