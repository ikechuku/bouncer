import React from "react";
import Input from "../form/input";
import Button from "../button";

const Login = () => {
  return (
    <div className="form">
      <form>
        <Input name="username" medium label="Username:" type="text" />
        <Input name="password" medium label="Password" type="password" />

        <Button btnTransparentDanger btnLarge>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
