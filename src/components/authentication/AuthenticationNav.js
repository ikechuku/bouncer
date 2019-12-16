import React from "react";
import { Logo } from "./styles";
import { Link } from "react-router-dom";



const NavLogo = () => {
  return (
    <div className="m-6">
      <Link to="/">
        <Logo>
          <img
            src="https://res.cloudinary.com/decagonbouncer/image/upload/v1576505112/bouncer-frontend/logo_alcxme.svg"
            alt="logo"
          />
        </Logo>
      </Link>
    </div>
  );
};

export default NavLogo;
