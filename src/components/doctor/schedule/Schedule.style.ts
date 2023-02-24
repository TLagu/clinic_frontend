import styled from "styled-components";
import { FONT_COLOR } from "constants/constants";

export const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
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
  justify-content: center;
  align-items: center;
  border: 1px solid ${FONT_COLOR};
  border-radius: 8px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  padding: 5px;
  margin: 5px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  width: 50px;
  padding: 5px;
  margin: 5px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${FONT_COLOR};
  border-radius: 8px;
`;

export const StyledHeading = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 12px auto;
  color: ${FONT_COLOR};
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 5px;
  border-radius: 8px;
  justify-content: center;
`;

export const InfoFree = styled.div`
  width: 100%;
  text-align: center;
  padding: 8px;
  border: 1px solid ${FONT_COLOR};
  color: ${FONT_COLOR};
  border-radius: 8px;
`;

export const InfoUsed = styled.span`
  width: 100%;
  text-align: center;
  padding: 8px;
  border: 1px solid red;
  color: red;
  border-radius: 8px;
`;

export const LineHighlighter = styled.span`
  color: ${FONT_COLOR};
`;
