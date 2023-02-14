import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  width: 50vw;
  height: 50vh;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #000000;
  padding-right: 16px;
`;

export const HiText = styled.p`
  font-size: 13px;
  line-height: 16px;
  color: rgb(77, 77, 77);
  font-weight: normal;
  text-decoration: none;
  margin: 0px;
`;

export const NameText = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: rgb(26, 26, 26);
  font-weight: bold;
  text-decoration: none;
  margin: 0 0 16px 0;
  padding: 0px;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  padding: 16px;
`;
