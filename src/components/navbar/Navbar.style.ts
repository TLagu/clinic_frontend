import styled from "styled-components";
import { Link } from "react-router-dom";
import { FONT_COLOR } from "constants/constants";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 8px 16px;
  color: ${FONT_COLOR};
`;

export const NavbarLogo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-size: 1.4em;
  font-weight: 600;
`;

export const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: ${FONT_COLOR};
`;

export const NavbarIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const NavbarSubmenuContainer = styled.div`
  display: none;
  min-width: 100%;
  background-color: #ffffff;
  padding: 16px 16px;
  margin-left: 10px;
  ${NavbarLink} {
    padding: 10px;
  }
`;

export const NavbarMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  gap: 40px;
`;

export const NavbarMainWrapper = styled.div`
  font-size: 18px;
  position: relative;
  ${NavbarSubmenuContainer} {
    display: none;
    position: absolute;
  }
  &:hover ${NavbarSubmenuContainer} {
    display: flex;
    flex-direction: column;
  }
`;
