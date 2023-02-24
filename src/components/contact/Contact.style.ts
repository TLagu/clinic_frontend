import { FONT_COLOR } from "constants/constants";
import styled from "styled-components";

export const CompanyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 32px 64px;
  width: 1000px;
`;
