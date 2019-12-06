import React from "react";
import {Input, Label, Container} from "./styles";

const InputGroup = props => {
  return (
    <Container>
    <Label htmlFor="input" > {props.label}  </Label>
    <Input {...props} 
    id="input"
    aria-label="input"
    aria-required="true"
    />
    </Container>
  );
};

InputGroup.defaultProps = {
  type: "text"
};

export default InputGroup;
