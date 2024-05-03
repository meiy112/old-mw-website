import { useTheme } from "@mui/material/styles";
import Recommendations from "./Recommendations";

export default function Right() {
  return (
    <div className="pr-[3vw] w-[28%] h-[100%] fixed flex items-start justify-start pt-[3.125em]">
      <Recommendations />
      <Ornament />
    </div>
  );
}

function Ornament() {
  const theme = useTheme();
  return (
    <div className=" absolute bottom-12 right-0 size-[40vh]">
      {theme.palette.mode === "dark" ? (
        <img src="/ornament-dark.png" />
      ) : (
        <img src="/ornament-light.png" />
      )}
    </div>
  );
}
