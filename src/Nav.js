import React from "react";
import Search from "./Search";
const Nav = ({ counter }) => {
  return (
    <div>
      <h3>Nav {counter}</h3>
      <Search />
    </div>
  );
};

export default Nav;
