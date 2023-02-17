import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthApi } from "api/AuthApi";
import {
  InputContainer,
  LoginButton,
  LoginContainer,
  LoginInput,
  StyledHeading,
  ValidationError,
} from "./Login.styles";
import { toast } from "react-toastify";
import { ACCESS_TOKEN } from "constants/constants";
// tsconfig.json
import UserContext from "context/UserContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const { userModifier } = useContext(UserContext);

  const onLoginClicked = useCallback(async () => {
    try {
      const result = await AuthApi.signIn({
        username: username,
        password: password,
      });
      localStorage.setItem(ACCESS_TOKEN, result.data.accessToken);
      userModifier({ ...result.data });
      toast.success("Poprawnie zalogowano", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/");
    } catch (error: any) {
      let errorMessage;

      if (error.response && error.response.status === 401) {
        errorMessage = "Podałeś błędne dane, spróbuj ponownie.";
      } else {
        errorMessage = "Wystąpił błąd podczas połączenia z serwerem.";
      }

      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [username, password, userModifier, navigate]);

  useEffect(() => {
    setIsUsernameValid(username.length > 0);
  }, [username]);

  useEffect(() => {
    setIsPasswordValid(password.length > 0);
  }, [password]);

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <LoginContainer>
      <StyledHeading>Jesteś naszym najważniejszym klientem</StyledHeading>
      <span>Aby kupić najlepsze produkty zaloguj się</span>
      <InputContainer>
        <LoginInput
          placeholder="Nazwa użytkownika"
          type="text"
          onChange={(e) => onUsernameChange(e)}
        ></LoginInput>
        {!isUsernameValid && (
          <ValidationError>Wpisz nazwę użytkownika</ValidationError>
        )}
        <LoginInput
          onChange={(e) => onPasswordChange(e)}
          placeholder="Hasło"
          type="password"
        ></LoginInput>
        {!isPasswordValid && <ValidationError>Wpisz hasło</ValidationError>}
        <LoginButton
          disabled={!isUsernameValid || !isPasswordValid}
          onClick={onLoginClicked}
        >
          Zaloguj się
        </LoginButton>
      </InputContainer>
    </LoginContainer>
  );
};
