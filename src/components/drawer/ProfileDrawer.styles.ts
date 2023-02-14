import styled from "styled-components";

export const ProfileDrawerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  min-height: 100vh;
`;

// 1vh = 1% of veiwport height 100vh = 100% of height.

export const UserName = styled.span`
  font-size: 24px;
  font-weight: 600;
`;

export const Email = styled.span`
  font-size: 18px;
  margin-bottom: 16px;
`;
