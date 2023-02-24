import styled from "styled-components";

export const NewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 64px;
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
