import React, { useState, useEffect } from "react";
import { LoginContainer, Navigation, Wrapper } from "./styles";
import Input from "../form/input";
import Button from "../button";
import { vendorValidationSchema } from "./validation";
import { useFormik, Formik } from "formik";
import { createVendor } from "../../actions/vendor.action";
import { connect } from "react-redux";
import izitoast from "izitoast";
import theme from "../theme";

const Vendor = props => {
  const { createVendor, vendor, creating } = props;
  const [created, setCreated] = useState(false);

  useEffect(() => {}, [vendor]);

  const izitoasts = {
    title: "Signup message",
    position: "topCenter",
    backgroundColor: "green",
    messageColor: "white",
    transitionInMobile: "fadeInUp",
    transitionOutMobile: "fadeOutDown",
    titleColor: theme.colors.light,
    timeout: 5000
  };

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
          <Formik
            initialValues={{
              username: "",
              shop_name: "",
              email: "",
              confirm_password: "",
              password: ""
            }}
            validationSchema={vendorValidationSchema}
            onSubmit={async values => {
              let info = { ...values, user_name: values.username };
              delete info["username"];
              setCreated(false);
              await createVendor(info);
              setCreated(true);
            }}
          >
            {({ values, handleChange, handleSubmit, errors }) => (
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
                  type="text"
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
                  Sign Up {creating && <p>loading</p>}
                </Button>
              </form>
            )}
          </Formik>
        </Wrapper>
        {created && vendor.status >= 200 && vendor.status <= 299
          ? izitoast.show({
              ...izitoasts,
              backgroundColor: theme.colors.success,
              message: `${vendor.data["message"]}. Check your email for verification of account`,
              messageColor: "white",
              icon: "cancel-circle"
            })
          : created && vendor.status >= 400 && vendor.status <= 499
          ? izitoast.show({
              ...izitoasts,
              message: vendor.data["message"],
              backgroundColor: theme.colors.danger,
              messageColor: "white"
            })
          : null}
      </div>
    </LoginContainer>
  );
};

const mapStateToProps = store => ({
  vendor: store.vendor.vendor,
  creating: store.vendor.creating
});
const mapDispatchToProps = {
  createVendor
};

export default connect(mapStateToProps, mapDispatchToProps)(Vendor);
