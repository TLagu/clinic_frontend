import { useCallback, useContext } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import UserContext from "context/UserContext";
import {
  ProfileDrawerContainer,
  UserName,
  Email,
} from "./ProfileDrawer.styles";
import { useNavigate } from "react-router-dom";
import AccountIcon from "icons/AccountIcon";
import { ACCESS_TOKEN } from "constants/constants";
import { PrimaryButton, SecondaryButton } from "components/global.styles";

interface ProfileDrawerProps {
  isProfileDrawerOpen: boolean;
  toggleProfileDrawer: () => void;
}

export const ProfileDrawer = (props: ProfileDrawerProps) => {
  const { currentUser, userModifier } = useContext(UserContext);
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    userModifier(null);
    localStorage.removeItem(ACCESS_TOKEN);
    navigate("/login");
    props.toggleProfileDrawer();
  }, [navigate, props, userModifier]);

  return (
    <Drawer
      open={props.isProfileDrawerOpen}
      onClose={props.toggleProfileDrawer}
      direction="right"
    >
      <ProfileDrawerContainer>
        {currentUser ? (
          <>
            <AccountIcon />
            <UserName>{currentUser.username}</UserName>
            <Email>{currentUser.email}</Email>
            <PrimaryButton
              onClick={() => {
                navigate("/clinics");
                props.toggleProfileDrawer();
              }}
            >
              Twoje konto
            </PrimaryButton>
            <SecondaryButton onClick={onLogout}>Wyloguj się</SecondaryButton>
          </>
        ) : (
          <>
            <h2>Nie jesteś zalogowany</h2>
            <p>
              Aby uzyskać dostęp do naprawdę tajnych danych po prostu zaloguj
              się.
            </p>
            <PrimaryButton
              onClick={() => {
                navigate("/login");
                props.toggleProfileDrawer();
              }}
            >
              Zaloguj się
            </PrimaryButton>
            <SecondaryButton
              onClick={() => {
                navigate("/register");
                props.toggleProfileDrawer();
              }}
            >
              Zarejestruj się
            </SecondaryButton>
          </>
        )}
      </ProfileDrawerContainer>
    </Drawer>
  );
};
