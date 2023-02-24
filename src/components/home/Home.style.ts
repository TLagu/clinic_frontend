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

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-bottom: 25px;
`;

export const BookmarkLink = styled(Link)`
  text-decoration: none;
  color: ${FONT_COLOR};
`;
