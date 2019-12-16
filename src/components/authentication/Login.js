import React from "react";
import Input from "../form/input";
import Button from "../button";
import { useFormik } from "formik";
import { Wrapper } from "./styles";
import { loginSchema } from "./validation";


const Login = () => {

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: loginSchema ,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          medium
          label="Username:"
          type="text"
          onChange={handleChange}
          value={values.username}
        />
        {errors.username ? errors.username : null}
        <Input
          name="password"
          medium
          label="Password"
          type="password"
          onChange={handleChange}
          value={values.password}
        />
        {errors.password ? errors.password : null}

        <Button btndangerDark btnLarge type="submit">
          Login
        </Button>
      </form>
    </Wrapper>
  );
};

export default Login;
