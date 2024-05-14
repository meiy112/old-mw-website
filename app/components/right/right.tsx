import { useTheme } from "@mui/material/styles";
import Recommendations from "./Recommendations";

export default function Right() {
  return (
    <div className="w-[100%] right pl-[2.4vw] pr-[3vw] h-[100%] fixed flex items-start justify-start pt-[3.125em]">
      <Recommendations />
    </div>
  );
}
