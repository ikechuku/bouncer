import React from "react";
import { LoginContainer, Navigation } from "./styles";
import Input from "../form/input";
import Button from "../button";
import { passwordSchema } from "./validation";

import { useFormik } from "formik";
import { Wrapper } from "./styles";

const Password = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: passwordSchema ,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <LoginContainer>
      <div className="loginImageContainer">
        <img
          src="https://res.cloudinary.com/decagonbouncer/image/upload/v1576504556/bouncer-frontend/lap_11copy_mhlpc5.svg"
          alt="Login"
        />
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
        <Wrapper className="form mt-6">
          <form onSubmit={handleSubmit}>
            <Input
              name="email"
              medium
              label="Enter Email:"
              type="email"
              placeholder="Enter Email Here"
              onChange={handleChange}
              value={values.email}
            />
            {errors.email ? errors.email : null}

            <Button btndangerDark btnLarge>
              Submit
            </Button>
          </form>
        </Wrapper>
      </div>
    </LoginContainer>
  );
};

export default Password;
