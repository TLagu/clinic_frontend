import styled from "styled-components";
import { FONT_COLOR } from "constants/constants";

export const HarmonogramContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledHeading = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 12px;
  color: ${FONT_COLOR};
`;
