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
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;
