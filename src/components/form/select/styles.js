import styled from "styled-components";
import select from "./mixins";
import backgroundColor from "../../color/mixins";

const Select = styled.select`
  ${select}
  ${backgroundColor}
  border: 2px solid #fafafb;
`;
export default Select;
