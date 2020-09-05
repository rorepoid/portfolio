import React from "react";

import tw from "twin.macro"

const Nav = tw.nav`
    w-full h-16 bg-indigo-500
`

const A = tw.a`
    select-none no-underline
`

const NavBar = () => {
  return (
    <Nav>
      <A href="/">Roberto Orellana Aliano</A>
    </Nav>
  );
};

export default NavBar;
