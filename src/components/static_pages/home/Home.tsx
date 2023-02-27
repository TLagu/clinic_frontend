import {
  BlueTextHighlighter,
  LoginButton,
  NestedTextContainer,
  StyledHeader,
  TextContainer,
  TextHeader,
} from "components/global.styles";
import { RegisterButton } from "components/register/Register.style";
import { useNavigate } from "react-router-dom";
import { MainContainer, BookmarkLink, HomeButtonPanel } from "../Static.styles";

export const Home = () => {
  const navigate = useNavigate();

  const onLoginClicked = () => {
    navigate("/login");
  };

  const onRegisterClicked = () => {
    navigate("/register");
  };

  return (
    <MainContainer>
      <StyledHeader>Ekskluzywne Centra Zdrowotne</StyledHeader>
      <TextHeader>Witajcie Drodzy Goście!</TextHeader>
      <NestedTextContainer>
        W zakładce
        <BlueTextHighlighter>
          <BookmarkLink to={"/about"}> "O nas" </BookmarkLink>
        </BlueTextHighlighter>
        znajdziecie Państwo informacje o naszej misji i podejściu do Pacjentów,
        a także firmie, jej tradycjach oraz naszych planach rozwoju.
      </NestedTextContainer>
      <NestedTextContainer>
        W zakładce
        <BlueTextHighlighter>
          <BookmarkLink to={"/clinics"}> "Nasze Kliniki" </BookmarkLink>
        </BlueTextHighlighter>
        znajdziecie Państwo aktualną listę wszystkich klinik wraz ze
        szczegółowymi danymi na ich temat.
      </NestedTextContainer>
      <NestedTextContainer>
        W zakładce
        <BlueTextHighlighter>
          <BookmarkLink to={"/news"}> "Nowości" </BookmarkLink>
        </BlueTextHighlighter>
        znajdziecie Państwo aktualne i najświeższe nowinki medyczne z kraju i ze
        świata, oraz nowości z naszych klinik.
      </NestedTextContainer>
      <NestedTextContainer>
        W zakładce
        <BlueTextHighlighter>
          <BookmarkLink to={"/contact"}> "Kontakt" </BookmarkLink>
        </BlueTextHighlighter>
        znajdziecie Państwo dane kontaktowe do naszej Centrali w Warszawie. Dane
        kontaktowe oddziałów znajdują się w "Naszych Klinikach".
      </NestedTextContainer>
      <TextHeader>Więcej informacji?</TextHeader>
      <TextContainer>
        Strona oferuje dużo więcej po zalogowaniu się. Jeśli już posiadacie
        Państwo u nas konto, prosimy kliknąć przycisk "Zaloguj się".
      </TextContainer>
      <TextContainer>
        Jeśli nie posiadają Państwo konta na naszej stronie zachęcamy do jego
        założenia używając przycisku "Zarejestruj się".
      </TextContainer>
      <HomeButtonPanel>
        <RegisterButton onClick={onRegisterClicked}>Załóż konto</RegisterButton>
        <LoginButton onClick={onLoginClicked}>Zaloguj się</LoginButton>
      </HomeButtonPanel>
      <TextContainer>
        Po rejestracji i utworzeniu konta Pacjenta będziecie mieli Państwo
        dostęp do listy naszych Specjalistów oraz możliwość umówienia u
        konkretnego Lekarza wizyty online przy zachowaniu minimum formalności.
      </TextContainer>
      <StyledHeader>0 800 001 000 003</StyledHeader>
      <TextContainer>
        W razie pytań lub wątpliwości zachęcamy do kontaktu z całodobową
        infolinią.
      </TextContainer>
      <TextHeader>Życzymy przyjemnego zwiedzania!</TextHeader>
    </MainContainer>
  );
};
