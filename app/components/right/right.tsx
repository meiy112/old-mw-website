import { useTheme } from "@mui/material/styles";
import Recommendations from "./Recommendations";

export default function Right() {
  return (
    <div className="w-[100%] pl-[2.4vw] pr-[3vw] h-[100%] fixed flex items-start justify-start pt-[3.125em]">
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
        <img src="/ornament-dark.png" alt="" />
      ) : (
        <img src="/ornament-light.png" alt="" />
      )}
    </div>
  );
}
