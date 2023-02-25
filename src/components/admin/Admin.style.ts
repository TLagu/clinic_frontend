import { FONT_COLOR } from "constants/constants";
import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
`;

export const UserManagementContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

export const ButtonPanel = styled.div`
  display: flex;
  justify-content: center;
  gap 20px;
  padding 20px;
  border: 1px solid ${FONT_COLOR};
  border-radius: 10px;
`;

export const ButtonPanelTitle = styled.span`
  display: flex;
  justify-content: center;
  font-size: 1.1em;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 20px;
  gap 20px;
`;

export const DisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 60vh;
  // gap: 16px;
  margin-top: 40px;
  padding-bottom: 32px;
  border-radius: 10px;
  border: 1px solid ${FONT_COLOR};
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 32px;
  grid-row-gap: 32px;
  padding: 32px 64px;
  width: 1000px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  padding-bottom: 32px;
`;
