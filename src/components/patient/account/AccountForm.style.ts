import styled from "styled-components";
import { FONT_COLOR } from "constants/constants";

export const PatientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 650px;
  min-height: 50vh;
  border-radius: 8px;
`;

export const PatientFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 670px;
  min-height: 50vh;
  border-radius: 8px;
`;

export const StyledHeading = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 25px;
  color: ${FONT_COLOR};
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const SaveButton = styled.button`
  padding: 12px 25px;
  margin: 10px auto;
  font-size: 20px;
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

export const FormInput = styled.input`
  width: 400px;
  padding: 8px 12px;
  font-size: 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
  border-color: ${FONT_COLOR};
`;

export const FormSelect = styled.select`
  width: 425px;
  padding: 8px 12px;
  font-size: 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
  border-color: ${FONT_COLOR};
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 18px;
  justify-content: center;
  margin: 15px 10px;
  padding-right: 10px;
  width: 300px;
`;

export const RightSide = styled.div`
  text-align: left;
  margin: 5px 0;
  width: 100%;
`;

export const ValidationError = styled.div`
  color: red;
  font-size: 16px;
  white-space: pre-wrap;
`;
