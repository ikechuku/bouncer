import React from "react";
import { Logo } from "./styles";
import { Link } from "react-router-dom";



const NavLogo = () => {
  return (
    <Link to="/">
      <Logo>
          <img
    src="https://res.cloudinary.com/decagonbouncer/image/upload/v1575976806/bouncer-frontend/logo_vcjh7n.png"
    alt="logo"
  />
      </Logo>
    </Link>
  )
};

export default NavLogo;
