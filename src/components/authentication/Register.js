import React from "react";
import Input from "../form/input";
import Button from "../button";

const Register = () => {
  return (
    <div className="form">
      <form>
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
