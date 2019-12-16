import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import { LoginContainer, Navigation } from "./styles";
import Nav from "./AuthenticationNav";

const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));

const SignIn = () => {
  return (
    <div>
      <Nav />
      <LoginContainer>
        <div className="loginImageContainer">
          <img
            src="https://res.cloudinary.com/decagonbouncer/image/upload/v1576063313/bouncer-frontend/login_image.png"
            alt="Login"
          />
        </div>
        <div className="loginForm">
          <div className="header">
            <div>
              <Navigation
                activeClassName="active"
                className="boldLink pb-2"
                to="/login"
              >
                Sign in
              </Navigation>
            </div>

            <div className="kk">
              <Navigation
                activeClassName="active"
                to="/register"
                className=" boldLink"
              >
                Register
              </Navigation>
            </div>
          </div>
          <div>
            <div>
              <Suspense fallback="loading...">
                <Switch>
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                </Switch>
              </Suspense>
            </div>

            <div className="footer">
              <Navigation
                activeClassName="active"
                className="boldLink pb-2"
                to="/vendor"
              >
                Become a vendor
              </Navigation>

              <Navigation to="/forgot-password">Forgot password</Navigation>
            </div>
          </div>
        </div>
      </LoginContainer>
    </div>
  );
};

export default SignIn;
