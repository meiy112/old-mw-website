import { useTheme } from "@mui/material/styles";
import { usePageContext } from "../context/PageProvider";

export default function NavLink({ name, tab }: { name: string; tab: string }) {
  const { setCurrentPage } = usePageContext();
  const onClick = () => {
    setCurrentPage(tab);
  };
  const theme = useTheme();
  return (
    <button
      onClick={onClick}
      className="navlink font-bold mx-[0.1em] px-[0.5em] py-[0.2em] rounded-[5px]"
      style={{
        color: theme.palette.primary.light,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
      }}
    >
      @{name}
    </button>
  );
}
