import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/hello"}>Hello</Link>
      <Outlet />
    </div>
  );
};

export default Navbar;
