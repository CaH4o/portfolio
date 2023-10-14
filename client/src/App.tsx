import React from "react";
import { Stack } from "@mui/material";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";

import { IappState } from "./interfaces/IinitialState";
import { RootState } from "./redux/store";
import { useAppSelector } from "./hooks/reduxHooks";
import AppRouter from "./AppRouter";

export default function App() {
  const app: IappState = useAppSelector((state: RootState) => state.app);
  const theme: Theme = createTheme({
    palette: {
      ...(app.theme.mode === "light" ? app.theme.light : app.theme.dark),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Stack
        bgcolor="background.default"
        fontSize="calc(10px + 1.5vmin)"
        color="white"
        padding="0"
        margin="0"
        minHeight="100vh"
        boxSizing="border-box"
      >
        <AppRouter />
      </Stack>
    </ThemeProvider>
  );
}
