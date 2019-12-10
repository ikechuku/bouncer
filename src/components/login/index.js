import React from "react";
import { LoginContainer, Links } from "./styles";
import LoginImage from "./assets/loginImage.png";
import Input from "../form/input";
import Button from "../button"

const SignIn = () => {
  return (
    <LoginContainer>
      <div className="loginImageContainer">
        <img src={LoginImage} alt="Login" />
      </div>
      <div className="loginForm">
        <div className="header">
          <Links className="active pb-2" to="/login">
            Sign in
          </Links>
          <Links to="/register">Register</Links>
        </div>
        <div className="form">
          <form>
            <Input
              name="email"
              medium
              label="Email"
              type="email"
              placeholder="Enter Email Here"
            />
            <Input
              name="password"
              medium
              label="Password"
              type="password"
              placeholder="Enter Password Here"
            />

            <Button btndangerDark btnLarge>
              Login
            </Button>
          </form>
        </div>
        <div className="footer">
          <Links to="/forgot-password">Forgot password</Links>
        </div>
      </div>
    </LoginContainer>
  );
};

export default SignIn;
