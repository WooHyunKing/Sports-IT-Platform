import styled from "styled-components";
import { SelectProps } from "../../interfaces/selectInterface";

export const SelectButton = styled.button<SelectProps>`
  border-radius: 20px;
  width: 76px;
  height: 40px;
  margin-right: 7px;
  margin-bottom: 10px;
  background-color: ${(props) => (props.active ? "#212121" : "#e0e0e0")};
`;

export const SelectText = styled.span<SelectProps>`
  color: ${(props) => (props.active ? "#ffffff" : "#212121")};
`;
