import React from "react";
import { Stack } from "@mui/material";

import AppRouter from "./AppRouter";

export default function App() {
  return (
    <Stack
      bgcolor="#282c34"
      fontSize="calc(10px + 1.5vmin)"
      color="white"
      padding="0"
      margin="0"
      minHeight="100vh"
      boxSizing="border-box"
    >
      <AppRouter />
    </Stack>
  );
}
