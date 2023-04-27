import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "./pagesParts/Header";
import Footer from "./pagesParts/Footer";

export default function Page(): JSX.Element {
  return (
    <>
      <Box
        position="relative"
        width="100%"
        marginTop="60px"
        minHeight="calc(100vh - 260px)"
      >
        <Outlet />
      </Box>
      <Box width="100%" height="200px">
        <Footer />
      </Box>
      <Box position="fixed" top="0" left="0" overflow="hidden" width="100%">
        <Header />
      </Box>
    </>
  );
}
