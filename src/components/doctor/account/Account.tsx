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
  FormSelect,
  SaveButton,
  ValidationError,
} from "./Account.style";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserDto } from "models/api/company/UserDto";
import { ClinicItems } from "components/common/ClinicItems";
import { ClinicApi } from "api/ClinicApi";
import { UserApi } from "api/UserApi";

export const Account = () => {
  const { currentUser } = useContext(UserContext);
  const [user, setUser] = useState<UserDto | null>(null);
  const [clinicItems, setClinicItems] = useState<ClinicItems | null>(null);

  const fetchUser = useCallback(async () => {
    if (currentUser?.username) {
      const userDetails = await UserDetailsApi.getUser(currentUser?.username);
      setUser(userDetails.data);
      const allClinics = await ClinicApi.getDictionaryClinic();
      setClinicItems(allClinics.data);

      console.log(userDetails);

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

  const navigate = useNavigate();
  const onSaveClicked = useCallback(async () => {
    try {
      const userRequest: UserDto = {
        uuid: user?.uuid != null ? user.uuid : "",
        password: password,
        username: "",
        email: email,
        roles: [],
        userAppDetails: {
          uuid:
            user?.userAppDetails?.uuid != null ? user.userAppDetails.uuid : "",
          firstName: firstName,
          secondName: secondName,
          lastName: lastName,
          pesel: pesel,
          idNumber: idNumber,
          birthDay: new Date(birthDay),
          nip: nip,
        },
        clinic: clinic,
      };
      console.log(userRequest);
      await UserApi.updateUser(userRequest);
      toast.success("Poprawnie zapisano zmiany.", {
        position: toast.POSITION.TOP_RIGHT,
      });
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

      navigate("/doctor");
    }
  }, [
    user?.uuid,
    user?.userAppDetails.uuid,
    password,
    email,
    clinic,
    firstName,
    secondName,
    lastName,
    pesel,
    idNumber,
    birthDay,
    nip,
    navigate,
  ]);

  useEffect(() => {
    setIsPasswordValid(
      password !== null &&
        (password.length === 0 ||
          (password.length >= 5 && password.length <= 50))
    );
  }, [password]);

  useEffect(() => {
    setIsEmailValid(
      !email === false && email.length >= 5 && email.length <= 50
    );
  }, [email]);

  useEffect(() => {
    setIsClinicValid(!clinic === false && clinic.length <= 40);
  }, [clinic]);

  useEffect(() => {
    setIsFirstNameValid(
      !firstName === false && firstName.length >= 3 && firstName.length <= 50
    );
  }, [firstName]);

  useEffect(() => {
    setIsSecondNameValid(secondName !== null && secondName.length <= 50);
  }, [secondName]);

  useEffect(() => {
    setIsLastNameValid(
      !lastName === false && lastName.length >= 3 && lastName.length <= 50
    );
  }, [lastName]);

  useEffect(() => {
    setIsPeselValid(!pesel === false && pesel.length === 11);
  }, [pesel]);

  useEffect(() => {
    setIsIdNumberValid(!idNumber === false && idNumber.length < 20);
  }, [idNumber]);

  useEffect(() => {
    setIsBirthDayValid(!birthDay === false && !isNaN(Date.parse(birthDay)));
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

  const onClinicChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
          {!isPasswordValid && (
            <ValidationError>
              Wprowadź poprawnie hasło.
              <br /> Hasło musi mieć minimum 5 znaków i maksimum 50.
            </ValidationError>
          )}
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
          {!isEmailValid && (
            <ValidationError>
              Wprowadź poprawnie adres e-mail.
              <br />
              E-mail musi mieć minimum 5 znaków i maksimum 50.
            </ValidationError>
          )}
        </RightSection>
      </InputContainer>
      <InputContainer>
        <LeftSide>Klinika:</LeftSide>
        <RightSection>
          <FormSelect onChange={(e) => onClinicChange(e)} defaultValue={clinic}>
            <option value="" hidden>
              Klinika...
            </option>
            {clinicItems?.items?.map((c) => (
              <option selected={c.uuid === clinic} value={c.uuid}>
                {c.itemName}
              </option>
            ))}
          </FormSelect>
          {!isClinicValid && (
            <ValidationError>
              Wybierz klinikę.
              <br />
              Pole kliniki nie może być puste.
            </ValidationError>
          )}
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
          {!isFirstNameValid && (
            <ValidationError>
              Wprowadź poprawnie pierwsze imię.
              <br />
              Pierwsze imię musi mieć minimum 5 znaków i maksimum 50.
            </ValidationError>
          )}
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
          {!isSecondNameValid && (
            <ValidationError>
              Wprowadź poprawnie drugie imię.
              <br />
              Pierwsze imię może być puste lub musi mieć minimum 5 znaków i
              maksimum 50.
            </ValidationError>
          )}
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
          {!isLastNameValid && (
            <ValidationError>
              Wprowadź poprawnie nazwisko.
              <br />
              Nazwisko musi mieć minimum 5 znaków i maksimum 50.
            </ValidationError>
          )}
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
          {!isPeselValid && (
            <ValidationError>
              Wprowadź poprawnie numer PESEL.
              <br />
              PESEL musi mieć dokładnie 11 znaków.
            </ValidationError>
          )}
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
          {!isIdNumberValid && (
            <ValidationError>
              Wprowadź poprawnie serię i numer dowodu osobistego.
              <br />
              Seria i numer dowodu nie może być pusta i nie może przekroczyć 20
              znaków.
            </ValidationError>
          )}
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
          {!isFirstNameValid && (
            <ValidationError>
              Wprowadź poprawnie numer NIP.
              <br />
              NIP może pozostać pusty lub zawierać dokładnie 10 znaków
              (wprowadzać bez myślników i spacji).
            </ValidationError>
          )}
        </RightSection>
      </InputContainer>
      <InputContainer>
        <SaveButton
          disabled={
            !isPasswordValid ||
            !isEmailValid ||
            !isClinicValid ||
            !isFirstNameValid ||
            !isSecondNameValid ||
            !isLastNameValid ||
            !isPeselValid ||
            !isIdNumberValid ||
            !isBirthDayValid ||
            !isNipValid
          }
          onClick={onSaveClicked}
        >
          Zapisz
        </SaveButton>
      </InputContainer>
    </AccountContainer>
  );
};
