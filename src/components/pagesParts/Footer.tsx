import React from "react";
import { Box } from "@mui/material";

export default function Footer(): JSX.Element {
  return (
    <Box component="footer" sx={{ p: 3 }}>
      <p>Author: OT</p>
      <p>
        <a href="mailto:hege@example.com">hege@example.com</a>
      </p>
    </Box>
  );
}
