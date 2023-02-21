import { useCallback, useContext, useEffect, useState } from "react";
import UserContext from "context/UserContext";
import { UserDetailsApi } from "api/UserDetailsApi";
import {
  AccountContainer,
  InputContainer,
  StyledHeading,
  LeftSide,
  RightSection,
  FormInput,
} from "./Account.style";
import { UserDto } from "models/api/company/UserDto";

export const Account = () => {
  const { currentUser } = useContext(UserContext);
  const [user, setUser] = useState<UserDto | null>(null);

  const fetchUser = useCallback(async () => {
    if (currentUser?.username) {
      const userDetails = await UserDetailsApi.getUser(currentUser?.username);
      setUser(userDetails.data);

      setEmail(userDetails.data.email);
      setClinic(
        userDetails.data.clinic === null ? "" : userDetails.data.clinic
      );
      setFirstName(userDetails.data.userAppDetails.firstName);
      setSecondName(userDetails.data.userAppDetails.secondName);
      setLastName(userDetails.data.userAppDetails.lastName);
      setPesel(userDetails.data.userAppDetails.pesel);
      setIdNumber(userDetails.data.userAppDetails.idNumber);
      setBirthDay(userDetails.data.userAppDetails.birthDay?.toLocaleString());
      setNip(userDetails.data.userAppDetails.nip);

      console.log(userDetails);
    }
  }, [currentUser?.username]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [clinic, setClinic] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [pesel, setPesel] = useState<string>("");
  const [idNumber, setIdNumber] = useState<string>("");
  const [birthDay, setBirthDay] = useState<string>("");
  const [nip, setNip] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isClinicValid, setIsClinicValid] = useState<boolean>(true);
  const [isFirstNameValid, setIsFirstNameValid] = useState<boolean>(true);
  const [isSecondNameValid, setIsSecondNameValid] = useState<boolean>(true);
  const [isLastNameValid, setIsLastNameValid] = useState<boolean>(true);
  const [isPeselValid, setIsPeselValid] = useState<boolean>(true);
  const [isIdNumberValid, setIsIdNumberValid] = useState<boolean>(true);
  const [isBirthDayValid, setIsBirthDayValid] = useState<boolean>(true);
  const [isNipValid, setIsNipValid] = useState<boolean>(true);

  useEffect(() => {
    setIsPasswordValid(
      password !== null && password.length >= 5 && password.length <= 50
    );
  }, [password]);

  useEffect(() => {
    setIsEmailValid(email !== null && email.length >= 6 && email.length <= 120);
  }, [email]);

  useEffect(() => {
    setIsClinicValid(clinic !== null && clinic.length <= 40);
  }, [clinic]);

  useEffect(() => {
    setIsFirstNameValid(
      firstName !== null && firstName.length >= 3 && firstName.length <= 50
    );
  }, [firstName]);

  useEffect(() => {
    setIsSecondNameValid(secondName !== null && secondName.length <= 50);
  }, [secondName]);

  useEffect(() => {
    setIsLastNameValid(
      lastName !== null && lastName.length >= 3 && lastName.length <= 50
    );
  }, [lastName]);

  useEffect(() => {
    setIsPeselValid(pesel !== null && pesel.length === 11);
  }, [pesel]);

  useEffect(() => {
    setIsIdNumberValid(idNumber !== null && idNumber.length < 20);
  }, [idNumber]);

  useEffect(() => {
    setIsBirthDayValid(birthDay !== null && !isNaN(Date.parse(birthDay)));
  }, [birthDay]);

  useEffect(() => {
    setIsNipValid((nip !== null && nip.length === 0) || nip.length === 10);
  }, [nip]);

  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onClinicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClinic(event.target.value);
  };

  const onFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const onSecondNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondName(event.target.value);
  };

  const onLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const onPeselChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPesel(event.target.value);
  };

  const onIdNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIdNumber(event.target.value);
  };

  const onBirthDayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthDay(event.target.value);
  };

  const onNipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNip(event.target.value);
  };

  return (
    <AccountContainer>
      <StyledHeading>Dane użytkownika:</StyledHeading>
      <InputContainer>
        <LeftSide>Hasło:</LeftSide>
        <RightSection>
          <FormInput
            placeholder="Hasło..."
            type="password"
            onChange={(e) => onPasswordChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Adres e-mail:</LeftSide>
        <RightSection>
          <FormInput
            placeholder="Adres e-mail..."
            type="text"
            value={`${email}`}
            onChange={(e) => onEmailChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Klinika:</LeftSide>
        <RightSection>
          <FormInput
            placeholder="Klinika..."
            type="text"
            value={`${clinic}`}
            onChange={(e) => onClinicChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Pierwsze imię:</LeftSide>
        <RightSection>
          <FormInput
            placeholder="Pierwsze imię..."
            type="text"
            value={`${firstName}`}
            onChange={(e) => onFirstNameChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Drugie Imię:</LeftSide>
        <RightSection>
          <FormInput
            placeholder="Drugie Imię..."
            type="text"
            value={`${secondName}`}
            onChange={(e) => onSecondNameChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Nazwisko:</LeftSide>
        <RightSection>
          <FormInput
            placeholder="Nazwisko..."
            type="text"
            value={`${lastName}`}
            onChange={(e) => onLastNameChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Numer PESEL:</LeftSide>
        <RightSection>
          <FormInput
            placeholder="PESEL..."
            type="text"
            value={`${pesel}`}
            onChange={(e) => onPeselChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Numer dowodu osobistego</LeftSide>
        <RightSection>
          <FormInput
            placeholder="Seria i numer dowodu osobistego..."
            type="text"
            value={`${idNumber}`}
            onChange={(e) => onIdNumberChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Data urodzenia:</LeftSide>
        <RightSection>
          <FormInput
            placeholder="Data urodzenia..."
            type="text"
            value={`${birthDay}`}
            onChange={(e) => onBirthDayChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Numer NIP:</LeftSide>
        <RightSection>
          <FormInput
            placeholder="NIP..."
            type="text"
            value={`${nip}`}
            onChange={(e) => onNipChange(e)}
          ></FormInput>
        </RightSection>
      </InputContainer>
    </AccountContainer>
  );
};
