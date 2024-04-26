import { useTheme } from "@/app/page";

// Container with "You Might Like" + Github, Linkedin
export default function Recommendations() {
  const currentTheme = useTheme();
  return (
    <div
      className="h-300 rounded-2xl p-[1.6em] flex"
      style={{
        border: `1px solid ${currentTheme.border}`,
      }}
    >
      <p
        style={{ color: currentTheme.onBackground }}
        className="font-semibold tracking-[0.02em] text-[1.25rem]"
      >
        You might like
      </p>
    </div>
  );
}
