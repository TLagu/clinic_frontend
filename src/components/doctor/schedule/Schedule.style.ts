import styled from "styled-components";
import { FONT_COLOR } from "constants/constants";

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ScheduleWrapper = styled.div`
  display: flex;
  padding: 16px;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  padding: 5px;
  margin: 5px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 5px;
  margin: 5px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  padding: 5px;
  margin: 5px;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

export const StyledHeading = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 12px;
  color: ${FONT_COLOR};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ffffff;

  padding: 5px;
  margin: 5px;
  border-radius: 8px;
  justify-content: center;
`;

export const InfoFree = styled.span`
  color: ${FONT_COLOR};
`;

export const InfoUsed = styled.span`
  color: red;
`;

export const LineHighlighter = styled.text`
  color: ${FONT_COLOR};
`;
