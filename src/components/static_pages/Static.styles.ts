import { FONT_COLOR } from "constants/constants";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 64px;
`;

export const HomeButtonPanel = styled.div`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-bottom: 25px;
`;

export const BookmarkLink = styled(Link)`
  text-decoration: none;
  color: ${FONT_COLOR};
`;

export const NewsHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsHeader = styled.h3`
  max-width: 900px;
`;

export const NewsTimestamp = styled.div`
  margin-top: 30px;
  font-size: 16px;
  color: grey;
  font-weight: 400;
  max-width: 200px;
`;

export const NewsTextContainer = styled.div`
  font-size: 20px;
  max-width: 900px;
`;
