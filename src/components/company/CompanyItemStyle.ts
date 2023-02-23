import { FONT_COLOR } from "constants/constants";
import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 16px;
`;

export const ItemNestedContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-top: 35px;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 8px;
  margin: 5px 0;
  width: 250px;
`;

export const RightSide = styled.div`
  text-align: left;
  margin: 5px 0;
  width: 650px;
`;

export const ImportantInfo = styled.span`
  font-size: 26px;
  font-weight: 600;
  font-style: italic;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 40px;
`;

export const LineHighlighter = styled.text`
  color: ${FONT_COLOR};
`;
