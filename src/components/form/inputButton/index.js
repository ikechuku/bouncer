import React from "react";

import { Container, Button, Input } from "./styles";

const InputButton = ({ placeholder, ...props }) => {
  return (
    <Container {...props}>
      <Input placeholder={placeholder} />
      <Button> Redeem</Button>
    </Container>
  );
};

export default InputButton;
