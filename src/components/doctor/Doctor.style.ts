import styled from "styled-components";
import { FONT_COLOR } from "constants/constants";

export const DoctorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  color: ${FONT_COLOR};
`;

export const DoctorWrapper = styled.div`
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
  font-size: 1.5empx;
  line-height: 2em;
  font-weight: normal;
  text-decoration: none;
  margin: 0px;
`;

export const NameText = styled.p`
  font-size: 1.1em;
  line-height: 2em;
  font-weight: bold;
  text-decoration: none;
  margin: 0 0 16px 0;
  padding: 0px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RightSection = styled.div`
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
