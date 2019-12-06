import React from "react";

import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon,
  Span,
  Label
} from "./styles";

const CheckGroup = ({checked,handleClick,...props}) => {
  return (
    <Span>
      <Label htmlFor="checkbox" {...props}>{props.label}</Label>
      <CheckboxContainer onClick={handleClick} id="checkbox">
        <HiddenCheckbox
          checked={checked}
          {...props}
          aria-label="checkbox"
          aria-required="true"
        />
        <StyledCheckbox checked={checked} {...props}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
    </Span>
  );
};
export default CheckGroup;
