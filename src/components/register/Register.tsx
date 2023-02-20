import { AuthApi } from "api/AuthApi";
import { ACCESS_TOKEN } from "constants/constants";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  InputContainer,
  RegisterContainer,
  RegisterInput,
  StyledHeading,
  RegisterButton,
  ValidationError,
} from "./Register.style";

export const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

  const navigate = useNavigate();

  const onRegisterClicked = useCallback(async () => {
    try {
      const result = await AuthApi.signUp({
        username: username,
        email: email,
        password: password,
      });
      toast.success("Poprawnie zarejestrowano nowego użytkownika!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
      navigate("/login");
    } catch (error: any) {
      let errorMessage;

      if (error.response && error.response.status === 401) {
        errorMessage = "Wyświetl błąd, że użytkownik istnieje.";
      } else {
        errorMessage = "Użytkownik już istnieje w bazie";
      }
      toast.error(errorMessage, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    }
  }, [
    username,
    email,
    password,
    //  userModifier,
    navigate,
  ]);

  useEffect(() => {
    setIsUsernameValid(username.length > 0);
  }, [username]);

  useEffect(() => {
    setIsEmailValid(email.length > 0);
  }, [email]);

  useEffect(() => {
    setIsPasswordValid(password.length > 0);
  }, [password]);

  const onUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <RegisterContainer>
      <StyledHeading>Zarejestruj się w portalu</StyledHeading>
      <InputContainer>
        <RegisterInput
          placeholder="Nazwa użytkownika"
          type="text"
          onChange={(e) => onUsernameChange(e)}
        ></RegisterInput>
        {!isUsernameValid && (
          <ValidationError>Wpisz nazwę użytkownika</ValidationError>
        )}
        <RegisterInput
          placeholder="Adres e-mail"
          type="email"
          onChange={(e) => onEmailChange(e)}
        ></RegisterInput>
        {!isEmailValid && <ValidationError>Wpisz email</ValidationError>}
        <RegisterInput
          placeholder="Hasło"
          type="password"
          onChange={(e) => onPasswordChange(e)}
        ></RegisterInput>
        {!isPasswordValid && <ValidationError>Wpisz hasło</ValidationError>}
        <RegisterButton
          disabled={!isUsernameValid || !isPasswordValid}
          onClick={onRegisterClicked}
        >
          Zarejestruj się
        </RegisterButton>
      </InputContainer>
    </RegisterContainer>
  );
};
