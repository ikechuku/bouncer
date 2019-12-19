import React from "react";
import Input from "../form/input";
import { passwordSchema } from "./validation";
import { useFormik } from "formik";
import { Wrapper, CustomButton } from "./styles";

const Password = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      username: ""
    },
    validationSchema: passwordSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Wrapper className="form mt-6">
      <form onSubmit={handleSubmit}>
        <Input
          name="username"
          medium
          label="Username:"
          type="text"
          onChange={handleChange}
          value={values.email}
        />
        {errors.email ? errors.email : null}

        <CustomButton
          className="d-flex justify-content-center"
          btndangerDark
          btnLarge
          type="submit"
        >
          Submit
        </CustomButton>
      </form>
    </Wrapper>
  );
};

export default Password;
