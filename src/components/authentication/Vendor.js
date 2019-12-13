import React from "react";
import { LoginContainer, Navigation } from "./styles";
import Input from "../form/input";
import Button from "../button";

const SignIn = () => {
  return (
    <LoginContainer>
        <div className="loginImageContainer">
          <img
            src="https://res.cloudinary.com/decagonbouncer/image/upload/v1576063313/bouncer-frontend/login_image.png"
            alt="Login"
          />
        </div>
      <div className="loginForm">
        <div className="header">
          <Navigation
            activeClassName="active"
            className="boldLink pb-2"
            to="/vendor"
          >
            Become a vendor
          </Navigation>
        </div>
        <div className="form">
          <form>
            <Input name="shopName" medium label="Shop name:" type="text" />
            <Input name="email" medium label="Email:" type="email" />
            <Input name="username" medium label="Username:" type="email" />
            <Input name="password" medium label="Password:" type="password" />
            <Input
              name="password"
              medium
              label="Confirm Password:"
              type="password"
            />
            <Button btnTransparentDanger btnLarge>
              Sign Up
            </Button>
          </form>
        </div>
        <div className="footer"></div>
      </div>
    </LoginContainer>
  );
};

export default SignIn;
