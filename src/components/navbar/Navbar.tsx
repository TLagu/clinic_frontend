import DrawerContext from "context/DrawerContext";
import AccountIcon from "icons/AccountIcon";
import {
  NavbarContainer,
  NavbarIcons,
  NavbarLink,
  NavbarLinks,
  NavbarLogo,
  NavbarMainContainer,
  NavbarMainWrapper,
  NavbarSubmenuContainer,
} from "./Navbar.style";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ACCESS_TOKEN } from "constants/constants";
import UserContext from "context/UserContext";
import { RoleType } from "models/RoleType";
import ClinicLogoIcon from "icons/ClinicLogo";

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
          return (
            <NavbarMainContainer>
              <NavbarMainWrapper>
                Panel lekarza
                <NavbarSubmenuContainer>
                  <NavbarLink to={"/doctor_schedule"}>Wizyty</NavbarLink>
                  <NavbarLink to={"/account"}>Konto</NavbarLink>
                </NavbarSubmenuContainer>
              </NavbarMainWrapper>
            </NavbarMainContainer>
          );
        case RoleType.ROLE_SECRETARY:
          return <NavbarLink to={"/secretary"}>Panel sekretariatu</NavbarLink>;
        case RoleType.ROLE_PATIENT:
          return (
            <NavbarMainContainer>
              <NavbarMainWrapper>
                Panel pacjenta
                <NavbarSubmenuContainer>
                  <NavbarLink to={"/patient_schedule"}>Wizyty</NavbarLink>
                  <NavbarLink to={"/account"}>Konto</NavbarLink>
                </NavbarSubmenuContainer>
              </NavbarMainWrapper>
            </NavbarMainContainer>
          );
      }
    return null;
  }

  return (
    <>
      <NavbarContainer>
        <NavbarLogo>
          <ClinicLogoIcon /> Klinika zdrowia
        </NavbarLogo>
        <NavbarLinks>
          <NavbarLink to={"/"}>Home</NavbarLink>
          <NavbarLink to={"/about"}>O nas</NavbarLink>
          <NavbarLink to={"/clinics"}>Nasze Kliniki</NavbarLink>
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
