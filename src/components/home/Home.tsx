import { RegisterButton } from "components/register/Register.style";
import { useNavigate } from "react-router-dom";
import {
  BlueTextHighlighter,
  BookmarkLink,
  ButtonContainer,
  HomeContainer,
  LoginButton,
  NestedTextContainer,
  StyledHeading,
  TextContainer,
  TextHeader,
} from "./Home.style";

export const Home = () => {
  const navigate = useNavigate();

  const onLoginClicked = () => {
    navigate("/login");
  };

  const onRegisterClicked = () => {
    navigate("/register");
  };

  return (
    <HomeContainer>
      <StyledHeading>Ekskluzywne Centra Zdrowotne</StyledHeading>
      <TextHeader>Witajcie Drodzy Goście!</TextHeader>
      <NestedTextContainer>
        Zapraszamy na wycieczkę po naszej stronie, poniżej znajduje się krótki
        opis nawigacyjny:
      </NestedTextContainer>
      <NestedTextContainer>
        W zakładce
        <BlueTextHighlighter>
          <BookmarkLink to={"/about"}> "O nas" </BookmarkLink>
        </BlueTextHighlighter>
        znajdziecie Państwo informacje o naszej firmie, jej tradycjach oraz
        planach rozwoju. Przede wszystkim można tam dowiedzieć się wiele o
        naszej misji i podejściu do Pacjentów.
      </NestedTextContainer>
      <NestedTextContainer>
        W zakładce
        <BlueTextHighlighter>
          <BookmarkLink to={"/clinics"}> "Nasze Kliniki" </BookmarkLink>
        </BlueTextHighlighter>
        znajdziecie Państwo aktualną listę wszystkich klinik wraz ze
        szczegółowymi danymi na ich temat. (Dostęp wymaga zalogowania).
      </NestedTextContainer>
      <NestedTextContainer>
        W zakładce
        <BlueTextHighlighter>
          <BookmarkLink to={"/news"}> "Nowości" </BookmarkLink>
        </BlueTextHighlighter>
        znajdziecie Państwo aktualne i najświeższe nowinki medyczne z kraju i ze
        świata. Istnieje możliwość dodania (moderowanego) komentarza.
      </NestedTextContainer>
      <NestedTextContainer>
        W zakładce
        <BlueTextHighlighter>
          <BookmarkLink to={"/contact"}> "Kontakt" </BookmarkLink>
        </BlueTextHighlighter>
        znajdziecie Państwo dane kontaktowe do naszej Centrali w Warszawie. Dane
        kontaktowe oddziałów znajdują się w "Naszych Klinikach". (Dostęp wymaga zalogowania). 
      </NestedTextContainer>
      <TextHeader>Więcej informacji?</TextHeader>
      <TextContainer>
        Strona oferuje dużo więcej po zalogowaniu się. Jeśli już posiadacie
        Państwo u nas konto, prosimy o kliknięcie w przycisk "Zaloguj się".
      </TextContainer>
      <TextContainer>
        Jeśli nie posiadają Państwo konta na naszej stronie zachęcamy do jego
        założenia używając przycisku "Zarejestruj się".
      </TextContainer>
      <ButtonContainer>
        <RegisterButton onClick={onRegisterClicked}>Załóż konto</RegisterButton>
        <LoginButton onClick={onLoginClicked}>Zaloguj się</LoginButton>
      </ButtonContainer>
      <TextContainer>
        Po rejestracji i tym samym utworzeniu konta Pacjenta będziecie mieli
        Państwo dostęp do listy naszych Specjalistów oraz możliwość umówienia u
        konkretnego Lekarza wizyty online przy zachowaniu minimum formalności.
      </TextContainer>
      <TextContainer></TextContainer>
      <TextContainer>
        W razie pytań lub wątpliwości zachęcamy do kontaktu z całodobową
        infolinią:
        <br />
        <StyledHeading>0 800 001 000 003</StyledHeading>
      </TextContainer>
      <TextHeader>Życzymy przyjemnego zwiedzania!</TextHeader>
    </HomeContainer>
  );
};
