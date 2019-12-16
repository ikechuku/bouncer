import React from "react";
import Input from "../form/input";
import Button from "../button";
import { useFormik } from "formik";
import { Wrapper } from "./styles";
import { registerSchema } from "./validation";


const Register = () => {

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      first_name: "",
      lastName: "",
      email: "",
      confirm_password: "",
      password: ""
    },
    validationSchema: registerSchema ,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={values.first_name}
          name="first_name"
          medium
          label="First name:"
          type="text"
        />
        {errors.first_name ? errors.first_name : null}

        <Input
          onChange={handleChange}
          value={values.last_name}
          name="last_name"
          medium
          label="Last name:"
          type="text"
        />
        {errors.last_name ? errors.last_name : null}

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
          value={values.email}
          name="email"
          medium
          label="Email:"
          type="email"
        />
        {errors.email ? errors.email : null}

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
  );
};

export default Register;
