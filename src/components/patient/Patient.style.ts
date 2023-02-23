import { FONT_COLOR } from "constants/constants";
import styled from "styled-components";

export const PatientContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const PatientWrapper = styled.div`
  display: flex;
  width: 1000px;
  min-height: 50vh;
  padding: 16px;
  border-radius: 8px;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 16px;
  border: 1px solid ${FONT_COLOR};
  padding: 10px;
  // box-shadow: 10px 5px 5px ${FONT_COLOR};
  width: 250px;
  border-radius: 10px;
`;

export const HiText = styled.p`
  display: flex;
  font-size: 1.5empx;
  line-height: 2em;
  font-weight: normal;
  text-decoration: none;
  justify-content: center;
  margin: 0 0 20 0;
`;

export const NameText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.2em;
  text-decoration: none;
  margin: 0 0 0 0;
  padding: 0px;
  color: ${FONT_COLOR};
`;

export const SurnameText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1.6em;
  font-weight: bold;
  text-decoration: none;
  margin: 0 0 0 0;
  padding: 0px;
  color: ${FONT_COLOR};
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  width: 650px;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  padding: 16px;
  border: 1px solid ${FONT_COLOR};
  border-radius: 10px;
`;
