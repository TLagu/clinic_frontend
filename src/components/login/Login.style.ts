import { FONT_COLOR } from "constants/constants";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 20rem;
  margin-top: 16px;
`;

export const LoginInput = styled.input`
  padding: 6px 12px;
  font-size: 18px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  outline: transparent solid 2px;
`;

export const RegisterLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-weight: 600;
  color: ${FONT_COLOR};
`;

export const ValidationError = styled.span`
  color: red;
  font-size: 13px;
`;
