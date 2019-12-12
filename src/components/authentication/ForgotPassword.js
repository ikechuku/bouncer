import React from "react";
import { LoginContainer, Navigation } from "./styles";
import LoginImage from "./assets/loginImage.png";
import Input from "../form/input";
import Button from "../button";
const SignIn = () => {
  return (
    <LoginContainer>
      <div className="loginImageContainer">
        <img src={LoginImage} alt="Login" />
      </div>
      <div className="loginForm">
        <div className="header">
          

          <Navigation
           
           activeClassName="active"
           className="boldLink pb-2"
           to="/forgot-password"
         >
           Forgot Password
         </Navigation>
        </div>
        <div className="form">
          <form>
            <Input
              name="email"
              medium
              label="Enter Email:"
              type="email"
              placeholder="Enter Email Here"
            />

            <Button btndangerDark btnLarge>
              Send Email
            </Button>
          </form>
        </div>
        <div className="footer"></div>
      </div>
    </LoginContainer>
  );
};

export default SignIn;
