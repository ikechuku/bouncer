import styled from "styled-components";
import inputHeight from "./mixins";

const Input = styled.input`
  ${inputHeight}
  width: 100%;
  border: 2px solid #f1f3f4;
  border-radius: 4px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.35px;
  text-align: left;
  color: #262626;
  padding-left: 20px;
  outline: none;
`;


export default Input;
