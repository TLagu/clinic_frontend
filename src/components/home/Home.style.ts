import styled from "styled-components";
import ShoppingDrawing from "icons/ShoppingDrawing";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 64px;
`;

export const StyledShoppingDrawing = styled(ShoppingDrawing)`
  height: 50vh;
`;

export const StyledHeading = styled.span`
  font-size: 36px;
  font-weight: 600;
  margin-top: 32px;
  margin-bottom: 8px;
`;
