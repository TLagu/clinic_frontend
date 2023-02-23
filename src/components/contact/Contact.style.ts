import { FONT_COLOR } from "constants/constants";
import styled from "styled-components";

export const Loader = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const CompanyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledHeading = styled.span`
  font-size: 36px;
  font-weight: 600;
  margin-top: 64px;
  margin-bottom: 25px;
  color: ${FONT_COLOR};
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 32px 64px;
  width: 1000px;
`;
