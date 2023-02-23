import { FONT_COLOR } from "constants/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
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
  margin-bottom: 20px;
  color: ${FONT_COLOR};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.h3`
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: 850px;
`;

export const TextContainer = styled.div`
  font-size: 20px;
  margin-left: 40px;
  margin-right: 40px;
  padding: 10px;
  max-width: 1000px;
  text-align: left;
`;

export const NestedTextContainer = styled.div`
  font-size: 20px;
  margin-top: 12px;
  margin-bottom: 12px;
  max-width: 1000px;
  text-align: left;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-bottom: 25px;
`;

export const LoginButton = styled.button`
  padding: 16px;
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

export const BlueTextHighlighter = styled.span`
  font-weight: 600;
  font-style: italic;
  color: ${FONT_COLOR};
`;

export const BookmarkLink = styled(Link)`
  text-decoration: none;
  color: ${FONT_COLOR};
`;
