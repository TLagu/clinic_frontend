import DrawerContext from "context/DrawerContext";
import AccountIcon from "icons/AccountIcon";
import {
  NavbarContainer,
  NavbarIcons,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
} from "./Navbar.style";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ACCESS_TOKEN } from "constants/constants";
import UserContext from "context/UserContext";
import { RoleType } from "models/RoleType";

export const Navbar = () => {
  const { toggleProfileDrawer } = useContext(DrawerContext);
  const { currentUser } = useContext(UserContext);

  function getNav(role: string) {
    if (
      localStorage.getItem(ACCESS_TOKEN) &&
      (currentUser?.roles.filter((r) => r === role).length ?? 0) > 0
    )
      switch (role) {
        case RoleType.ROLE_ADMIN:
          return <NavbarLink to={"/admin"}>Panel administratora</NavbarLink>;
        case RoleType.ROLE_DOCTOR:
          return <NavbarLink to={"/doctor"}>Panel lekarza</NavbarLink>;
        case RoleType.ROLE_SECRETARY:
          return <NavbarLink to={"/secretary"}>Panel sekretariatu</NavbarLink>;
        case RoleType.ROLE_PATIENT:
          return <NavbarLink to={"/patient"}>Panel pacjenta</NavbarLink>;
      }
    return null;
  }

  return (
    <>
      <NavbarContainer>
        <NavbarLogo>Klinika zdrowia</NavbarLogo>
        <NavbarLinks>
          <NavbarLink to={"/"}>Home</NavbarLink>
          <NavbarLink to={"/about"}>O nas</NavbarLink>
          <NavbarLink to={"/clinics"}>Nasze kliniki</NavbarLink>
          <NavbarLink to={"/news"}>Nowości</NavbarLink>
          <NavbarLink to={"/contact"}>Kontakt</NavbarLink>
          <>{getNav("ROLE_ADMIN")}</>
          <>{getNav("ROLE_DOCTOR")}</>
          <>{getNav("ROLE_SECRETARY")}</>
          <>{getNav("ROLE_PATIENT")}</>
        </NavbarLinks>
        <NavbarIcons>
          <AccountIcon
            style={{ cursor: "pointer" }}
            onClick={toggleProfileDrawer}
            stroke="#1d99c2"
            fill="#1d99c2"
          />
        </NavbarIcons>
      </NavbarContainer>
      <Outlet />
    </>
  );
};
