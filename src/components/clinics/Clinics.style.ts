import { FONT_COLOR } from "constants/constants";
import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 32px 64px;
  width: 1000px;
`;

export const ClinicsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  padding-bottom: 32px;
`;
