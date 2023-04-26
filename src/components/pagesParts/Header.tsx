import React from "react";
import { Link } from "react-router-dom";

export default function Header(): JSX.Element {
  return <div>
    <Link to="">Home</Link>
    <Link to="projects">Projects</Link>
    <Link to="projects/1">Single Project</Link>
  </div>;
}
