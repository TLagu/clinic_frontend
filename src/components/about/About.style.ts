import { FONT_COLOR } from "constants/constants";
import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
  margin-bottom: 64px;
`;

export const StyledHeading = styled.span`
  font-size: 36px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
  color: ${FONT_COLOR};
`;

export const TextHeader = styled.h3`
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 850px;
`;

export const TextContainer = styled.div`
  font-size: 18px;
  margin-left: 40px;
  margin-right: 40px;
  padding: 10px;
  max-width: 1000px;
`;

export const NestedTextContainer = styled.div`
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 1000px;
`;

export const BlueTextHighlighter = styled.text`
  font-weight: 600;
  font-style: italic;
  color: ${FONT_COLOR};
`;

export const BlackTextHighlighter = styled.text`
  font-weight: 700;
  font-style: italic;
`;
