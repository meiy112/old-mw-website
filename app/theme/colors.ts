import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#719B69",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    background: {
      default: "#151518",
    },
    divider: "#454545",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#c3d1ae",
      contrastText: "#000000",
    },
    secondary: {
      main: "#151518",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
    },
    divider: "#C3D1AE",
  },
});
