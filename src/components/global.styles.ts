import { FONT_COLOR } from "constants/constants";
import styled from "styled-components";

export const PrimaryButton = styled.button`
  padding: 10px 16px;
  border: 0;
  background-color: #24a0ed;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    filter: brightness(85%);
  }
`;

export const SecondaryButton = styled.button`
  padding: 10px 16px;
  border: 1 px solid #02075d;
  border-radius: 8px;
  color: #02075d;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-top: 8px;
`;

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

export const StyledHeader = styled.span`
  font-size: 36px;
  font-weight: 600;
  margin-top: 64px;
  margin-bottom: 25px;
  color: ${FONT_COLOR};
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 8px;
  margin: 5px 0;
  width: 250px;
`;

export const TextHeader = styled.h3`
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 850px;
`;

export const TextContainer = styled.div`
  font-size: 20px;
  margin-left: 40px;
  margin-right: 40px;
  padding: 10px;
  max-width: 1000px;
  text-align: left;
`;

export const NestedTextContainer = styled.div`
  font-size: 20px;
  margin-top: 8px;
  margin-bottom: 8px;
  max-width: 1000px;
  text-align: left;
`;

export const BlueTextHighlighter = styled.span`
  font-weight: 600;
  font-style: italic;
  color: ${FONT_COLOR};
`;

export const BlackTextHighlighter = styled.span`
  font-weight: 700;
  font-style: italic;
`;

export const LoginButton = styled.button`
  padding: 16px;
  border: 0;
  background-color: #24a0ed;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    color: #666666;
  }

  &:hover {
    filter: brightness(85%);
  }
`;
