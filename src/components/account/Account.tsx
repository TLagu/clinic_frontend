import { useCallback, useContext, useEffect, useState } from "react";
import UserContext from "context/UserContext";
import { UserDetailsApi } from "api/UserDetailsApi";
import {
  FormContainer,
  InputContainer,
  StyledHeading,
  SaveButton,
} from "components/common/form/Form.style";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserDto } from "models/api/company/UserDto";
import { ClinicApi } from "api/ClinicApi";
import { UserApi } from "api/UserApi";
import { FormLineInput } from "components/common/form/FormLineInput";
import { FormLineSelect } from "components/common/form/FormLineSelect";
import { isAccountValid } from "./AccountValidation";
import {
  MainPanelContainer,
  MainPanelWrapper,
} from "../common/MainPanel.style";
import { DictionaryItems } from "components/common/DictionaryItems";

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

  const navigate = useNavigate();

  const fetchData = useCallback(async () => {
    if (currentUser?.username) {
      const userDetails = await UserDetailsApi.getUser(currentUser?.username);
      setUser(userDetails.data);
      const allClinics = await ClinicApi.getDictionaryClinic();
      setClinicItems(allClinics.data);

      setEmail(userDetails.data.email);
      setClinic(userDetails.data.clinic as string);
      setFirstName(userDetails.data.userAppDetails.firstName);
      setSecondName(userDetails.data.userAppDetails.secondName as string);
      setLastName(userDetails.data.userAppDetails.lastName);
      setPesel(userDetails.data.userAppDetails.pesel);
      setIdNumber(userDetails.data.userAppDetails.idNumber as string);
      setBirthDay(userDetails.data.userAppDetails.birthDay?.toLocaleString());
      setNip(userDetails.data.userAppDetails.nip as string);
    }
  }, [currentUser?.username, navigate]);

  useEffect(() => {
    fetchData();
  }, [currentUser?.username, fetchData, navigate]);

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

  const onSaveClicked = useCallback(async () => {
    try {
      const userRequest: UserDto = {
        uuid: user?.uuid as string,
        password: password,
        username: "",
        email: email,
        roles: [],
        userAppDetails: {
          uuid: user?.userAppDetails?.uuid as string,
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
      await UserApi.updateUser(userRequest);
      toast.success("Poprawnie zapisano zmiany.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error: any) {
      let errorMessage;

      if (error.response && error.response.status === 401) {
        errorMessage = "Poda??e?? b????dne dane, spr??buj ponownie.";
      } else {
        errorMessage = "Wyst??pi?? b????d podczas po????czenia z serwerem.";
      }

      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });

      navigate("/account");
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
    setIsPasswordValid(isAccountValid(password, "password"));
  }, [password]);
  useEffect(() => {
    setIsEmailValid(isAccountValid(email, "email"));
  }, [email]);
  useEffect(() => {
    setIsClinicValid(isAccountValid(clinic, "clinic"));
  }, [clinic]);
  useEffect(() => {
    setIsFirstNameValid(isAccountValid(firstName, "firstName"));
  }, [firstName]);
  useEffect(() => {
    setIsSecondNameValid(isAccountValid(secondName, "secondName"));
  }, [secondName]);
  useEffect(() => {
    setIsLastNameValid(isAccountValid(lastName, "lastName"));
  }, [lastName]);
  useEffect(() => {
    setIsPeselValid(isAccountValid(pesel, "pesel"));
  }, [pesel]);
  useEffect(() => {
    setIsIdNumberValid(isAccountValid(idNumber, "idNumber"));
  }, [idNumber]);
  useEffect(() => {
    setIsBirthDayValid(isAccountValid(birthDay, "birthDay"));
  }, [birthDay]);
  useEffect(() => {
    setIsNipValid(isAccountValid(nip, "nip"));
  }, [nip]);

  return (
    <MainPanelContainer>
      <MainPanelWrapper>
        <FormContainer>
          <StyledHeading>Dane u??ytkownika:</StyledHeading>
          <InputContainer>
            <FormLineInput
              label="Has??o:"
              placeholder="Has??o..."
              type="password"
              value={password}
              onChange={(value) => setPassword(value)}
              validationResult={isPasswordValid}
              validationMessage={`Has??o musi mie?? minimum 5 znak??w i maksimum 50.`}
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
              validationMessage={`E-mail musi mie?? minimum 5 znak??w i maksimum 50.`}
            />
          </InputContainer>
          <InputContainer>
            <FormLineSelect
              label="Adres e-mail:"
              onChange={(value) => setClinic(value)}
              placeholder="Klinika..."
              dictionary={clinicItems as any}
              value={clinic}
              validationResult={isClinicValid}
              validationMessage={`Wybierz swoj?? klinik??.`}
            />
          </InputContainer>
          <InputContainer>
            <FormLineInput
              label="Pierwsze imi??:"
              placeholder="Pierwsze imi??..."
              type="text"
              value={firstName}
              onChange={(value) => setFirstName(value)}
              validationResult={isFirstNameValid}
              validationMessage={`Pierwsze imi?? musi mie?? minimum 5 znak??w i maksimum 50.`}
            />
          </InputContainer>
          <InputContainer>
            <FormLineInput
              label="Drugie imi??:"
              placeholder="Drugie imi??..."
              type="text"
              value={secondName}
              onChange={(value) => setSecondName(value)}
              validationResult={isSecondNameValid}
              validationMessage={`Drugie imi?? mo??e by?? puste lub musi mie?? minimum 5 znak??w i maksimum 50.`}
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
              validationMessage={`Nazwisko musi mie?? minimum 5 znak??w i maksimum 50.`}
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
              validationMessage={`PESEL musi mie?? dok??adnie 11 znak??w.`}
            />
          </InputContainer>
          <InputContainer>
            <FormLineInput
              label="Seria i numer dowodu osobistego:"
              placeholder="Seria i numer dowodu osobistego..."
              type="text"
              value={idNumber}
              onChange={(value) => setIdNumber(value)}
              validationResult={isIdNumberValid}
              validationMessage={`Seria i numer dowodu nie mo??e by?? pusta i nie mo??e przekroczy?? 20 znak??w.`}
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
              validationMessage={`NIP mo??e pozosta?? pusty lub zawiera?? dok??adnie 10 znak??w (wprowadza?? bez my??lnik??w i spacji).`}
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
        </FormContainer>
      </MainPanelWrapper>
    </MainPanelContainer>
  );
};
