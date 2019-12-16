import React from "react";
import { LoginContainer, Navigation, Wrapper } from "./styles";
import Input from "../form/input";
import Button from "../button";
import { vendorValidationSchema } from "./validation";
import { useFormik } from "formik";

const Vendor = () => {

    const { handleSubmit, handleChange, values, errors } = useFormik({
      initialValues: {
        username: "",
        shop_name: "",
        email: "",
        confirm_password: "",
        password: ""
      },
      validationSchema: vendorValidationSchema ,
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
            to="/vendor"
          >
            Become a vendor
          </Navigation>
        </div>
        <Wrapper>
          <form onSubmit={handleSubmit}>
            <Input
              onChange={handleChange}
              value={values.shop_name}
              name="shop_name"
              medium
              label="Shop name:"
              type="text"
            />
            {errors.shop_name ? errors.shop_name : null}

            <Input
              onChange={handleChange}
              value={values.email}
              name="email"
              medium
              label="Email:"
              type="email"
            />
            {errors.email ? errors.email : null}

            <Input
              onChange={handleChange}
              value={values.username}
              name="username"
              medium
              label="Username:"
              type="email"
            />
            {errors.username ? errors.username : null}

            <Input
              onChange={handleChange}
              value={values.password}
              name="password"
              medium
              label="Password:"
              type="password"
            />
            {errors.password ? errors.password : null}

            <Input
              onChange={handleChange}
              value={values.confirm_password}
              name="confirm_password"
              medium
              label="Confirm Password:"
              type="password"
            />
            {errors.confirm_password ? errors.confirm_password : null}

            <Button btndangerDark btnLarge type="submit">
              Sign Up
            </Button>
          </form>
        </Wrapper>
      </div>
    </LoginContainer>
  );
};

export default Vendor;
