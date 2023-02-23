import styled from "styled-components";
import { FONT_COLOR } from "constants/constants";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledHeading = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin: 12px auto;
  color: ${FONT_COLOR};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  justify-content: center;
  gap: 8px;
  margin: 5px 0;
  padding-right: 10px;
  width: 200px;
`;

export const RightSide = styled.div`
  text-align: left;
  margin: 5px 0;
  width: 100%;
`;

export const FormInput = styled.input`
  width: 500px;
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
`;

export const FormSelect = styled.select`
  width: 500px;
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
`;
export const FormButton = styled.button`
  padding: 16px;
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

export const ValidationError = styled.div`
  color: red;
  font-size: 13px;
  white-space: pre-wrap;
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
