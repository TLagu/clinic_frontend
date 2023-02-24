import { ClinicApi } from "api/ClinicApi";
import { UserApi } from "api/UserApi";
import { UserDetailsApi } from "api/UserDetailsApi";
import { DictionaryItems } from "components/common/DictionaryItems";
import UserContext from "context/UserContext";
import { UserDto } from "models/api/company/UserDto";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isAccountValidation } from "./AccountValidation";
import {
  PatientFormContainer,
  InputContainer,
  StyledHeading,
  SaveButton,
  PatientContainer,
} from "components/patient/account/AccountForm.style";
import { FormLineInput } from "./FormLineInput";
import { FormLineSelect } from "./FormLineSelect";

export const Account = () => {
  const { currentUser } = useContext(UserContext);
  const [user, setUser] = useState<UserDto | null>(null);
  const [clinicItems, setClinicItems] = useState<DictionaryItems | null>(null);

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

  const fetchData = useCallback(async () => {
    if (currentUser?.username) {
      const userDetails = await UserDetailsApi.getUser(currentUser?.username);
      setUser(userDetails.data);
      const allClinics = await ClinicApi.getDictionaryClinic();
      setClinicItems(allClinics.data);

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
    fetchData();
  }, [fetchData]);

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

      navigate("/patient");
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
    setIsPasswordValid(isAccountValidation(password, "password"));
  }, [password]);
  useEffect(() => {
    setIsEmailValid(isAccountValidation(email, "email"));
  }, [email]);
  useEffect(() => {
    setIsClinicValid(isAccountValidation(clinic, "clinic"));
  }, [clinic]);
  useEffect(() => {
    setIsFirstNameValid(isAccountValidation(firstName, "firstName"));
  }, [firstName]);
  useEffect(() => {
    setIsSecondNameValid(isAccountValidation(secondName, "secondName"));
  }, [secondName]);
  useEffect(() => {
    setIsLastNameValid(isAccountValidation(lastName, "lastName"));
  }, [lastName]);
  useEffect(() => {
    setIsPeselValid(isAccountValidation(pesel, "pesel"));
  }, [pesel]);
  useEffect(() => {
    setIsIdNumberValid(isAccountValidation(idNumber, "idNumber"));
  }, [idNumber]);
  useEffect(() => {
    setIsBirthDayValid(isAccountValidation(birthDay, "birthDay"));
  }, [birthDay]);
  useEffect(() => {
    setIsNipValid(isAccountValidation(nip, "nip"));
  }, [nip]);

  return (
    <PatientContainer>
      <PatientFormContainer>
        <StyledHeading>Sprawdź lub zmodyfikuj swoje dane:</StyledHeading>
        <InputContainer>
          <FormLineInput
            label="Hasło:"
            placeholder="Hasło..."
            type="password"
            value={password}
            onChange={(value) => setPassword(value)}
            validationResult={isPasswordValid}
            validationMessage={`Hasło musi mieć minimum 5 znaków i maksimum 50.`}
          />
        </InputContainer>
        <InputContainer>
          <FormLineInput
            label="Adres e-mail:"
            placeholder="Adres e-mail..."
            type="text"
            value={email}
            onChange={(value) => setEmail(value)}
            validationResult={isEmailValid}
            validationMessage={`E-mail musi mieć minimum 5 znaków i maksimum 50.`}
          />
        </InputContainer>
        <InputContainer>
          <FormLineSelect
            label="Moja klinika:"
            onChange={(value) => setClinic(value)}
            placeholder="Klinika..."
            dictionary={clinicItems as any}
            value={clinic}
            validationResult={isClinicValid}
            validationMessage={`Wybierz swoją klinikę.`}
          />
        </InputContainer>
        <InputContainer>
          <FormLineInput
            label="Pierwsze imię:"
            placeholder="Pierwsze imię..."
            type="text"
            value={firstName}
            onChange={(value) => setFirstName(value)}
            validationResult={isFirstNameValid}
            validationMessage={`Pierwsze imię musi mieć minimum 5 znaków i maksimum 50.`}
          />
        </InputContainer>
        <InputContainer>
          <FormLineInput
            label="Drugie imię:"
            placeholder="Drugie imię..."
            type="text"
            value={secondName}
            onChange={(value) => setSecondName(value)}
            validationResult={isSecondNameValid}
            validationMessage={`Drugie imię może być puste lub musi mieć minimum 5 znaków i maksimum 50.`}
          />
        </InputContainer>
        <InputContainer>
          <FormLineInput
            label="Nazwisko:"
            placeholder="Nazwisko..."
            type="text"
            value={lastName}
            onChange={(value) => setLastName(value)}
            validationResult={isLastNameValid}
            validationMessage={`Nazwisko musi mieć minimum 5 znaków i maksimum 50.`}
          />
        </InputContainer>
        <InputContainer>
          <FormLineInput
            label="Numer PESEL:"
            placeholder="Numer PESEL..."
            type="text"
            value={pesel}
            onChange={(value) => setPesel(value)}
            validationResult={isPeselValid}
            validationMessage={`PESEL musi mieć dokładnie 11 znaków.`}
          />
        </InputContainer>
        <InputContainer>
          <FormLineInput
            label="Seria i numer dowodu:"
            placeholder="Seria i numer dowodu..."
            type="text"
            value={idNumber}
            onChange={(value) => setIdNumber(value)}
            validationResult={isIdNumberValid}
            validationMessage={`Seria i numer dowodu nie może być pusta i nie może przekroczyć 20 znaków.`}
          />
        </InputContainer>
        <InputContainer>
          <FormLineInput
            label="Data urodzenia:"
            placeholder="Data urodzenia..."
            type="text"
            value={birthDay}
            onChange={(value) => setBirthDay(value)}
            validationResult={isBirthDayValid}
            validationMessage={`Format daty urodzenia to YYYY-MM-DD.`}
          />
        </InputContainer>
        <InputContainer>
          <FormLineInput
            label="Numer NIP:"
            placeholder="Numer NIP..."
            type="text"
            value={nip}
            onChange={(value) => setNip(value)}
            validationResult={isNipValid}
            validationMessage={`NIP może pozostać pusty lub zawierać dokładnie 10 znaków (wprowadzać bez myślników i spacji).`}
          />
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
      </PatientFormContainer>
    </PatientContainer>
  );
};
