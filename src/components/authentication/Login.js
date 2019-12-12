import React from "react";
import Input from "../form/input";
import Button from "../button";

const Login = () => {
  return (
    <div className="form">
      <form>
        <Input name="email" medium label="Email:" type="email" />
        <Input name="password" medium label="Password" type="password" />

        <Button btnTransparentDanger btnLarge>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
