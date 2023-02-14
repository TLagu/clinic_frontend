import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 8px 16px;
  color: #1d99c2;
`;

export const NavbarLogo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  font-size: 1.5em;
`;

export const NavbarLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 35px;
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #1d99c2;
`;

export const NavbarIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
