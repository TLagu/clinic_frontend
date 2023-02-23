import styled from "styled-components";
import { FONT_COLOR } from "constants/constants";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FormInput = styled.input`
  width: 350px;
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
`;

export const FormSelect = styled.select`
  width: 350px;
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
`;

export const StyledHeading = styled.span`
  font-size: 26px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 20px;
  color: ${FONT_COLOR};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const SaveButton = styled.button`
  padding: 12px 25px;
  margin: 10px auto;
  font-size: 18px;
  border: 0;
  background-color: #24a0ed;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }

  &:hover {
    filter: brightness(85%);
  }
`;
