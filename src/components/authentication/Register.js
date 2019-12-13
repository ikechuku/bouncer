import React from "react";
import Input from "../form/input";
import Button from "../button";

const Register = () => {
  return (
    <div className="form">
      <form>
        <Input name="firstName" medium label="First name:" type="text" />
        <Input name="lastName" medium label="Last name:" type="text" />
        <Input name="userName" medium label="Username:" type="text" />
        <Input name="email" medium label="Email:" type="email" />
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
  );
};

export default Register;
