import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./pagesParts/Header";
import Footer from "./pagesParts/Footer";

export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
