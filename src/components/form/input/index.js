import React from "react";
import Input from "./styles";

const InputGroup = props => {
  return (
    <label>
      {props.label}
      <br></br>
      <Input {...props} />
    </label>
  );
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
