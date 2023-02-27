import {
  BlackTextHighlighter,
  BlueTextHighlighter,
  NestedTextContainer,
  StyledHeader,
  TextContainer,
  TextHeader,
} from "components/global.styles";
import { MainContainer } from "../Static.styles";

export const About = () => {
  return (
    <MainContainer>
      <StyledHeader>O nas</StyledHeader>
      <NestedTextContainer>
        Ekskluzywne Centra Zdrowotne to sieć klinik świadczących usługi na
        najwyższym poziomie.
      </NestedTextContainer>
      <TextContainer>
        Co ważne i odróżniające nas od konkurencji, to fakt, że w jakości
        świadczeń
        <BlueTextHighlighter>
          {" "}
          dążymy do doskonałości, utrzymując{" "}
        </BlueTextHighlighter>
        jednocześnie
        <BlueTextHighlighter>
          {" "}
          niewygórowany poziom cenowy.{" "}
        </BlueTextHighlighter>
        Zależy nam nie tylko na bezpieczeństwie naszych Pacjentów, a przede
        wszystkim na ich poczuciu bezpieczeństwa i stabilności.
      </TextContainer>
      <TextHeader>Jak dbamy o Pacjentów?</TextHeader>
      <TextContainer>
        <BlackTextHighlighter>
          Maksymalna satysfakcja oraz ukierunkowane usługi:
        </BlackTextHighlighter>
        <br />
        <li>recepcje klinik czynne całą dobę,</li>
        <li>całodobowy oddział SOR / Emergency w 90% placówek,</li>
        <li>
          transport<BlueTextHighlighter> prywatną karetką </BlueTextHighlighter>
          (pakiet VIP zapewnia usłgę w ramach abonamentu),
        </li>
        <li>najowocześniejszy sprzęt medyczny.</li>
        <br />
        <BlackTextHighlighter>Kompleksowa informacja:</BlackTextHighlighter>
        <br />
        <li>na temat stanu zdrowia i zaplanowanego leczenia,</li>
        <li>
          liczne formy dostępu: online, osobiście, przez Pełnomocnika Pacjenta,
        </li>
        <li>
          osobom o ograniczonej mobilności
          <BlueTextHighlighter> zapewniamy dostawy </BlueTextHighlighter>środków
          medycznych
          <BlueTextHighlighter> za pomocą dronów. </BlueTextHighlighter>
        </li>
        <br />
        <BlackTextHighlighter>
          Kompetentny i doświadczony personel medyczny:
        </BlackTextHighlighter>
        <br />
        <li>
          <BlueTextHighlighter>
            systemy profesjonalnej oceny{" "}
          </BlueTextHighlighter>
          kompetencji i zaangażowania.
        </li>
      </TextContainer>
      <TextHeader>Nasze tradycje</TextHeader>
      <TextContainer>
        Firma ma długą tradycję współpracy z najlepszymi specjalistami z całego
        świata. Osobom nieznającym języka angielskiego w cenie konsultacji u
        zagranicznego specjalisty zapewniamy również
        <BlueTextHighlighter> tłumacza</BlueTextHighlighter>.
      </TextContainer>
      <TextHeader>Nasze plany rozwoju</TextHeader>
      <TextContainer>
        Nasze plany rozwoju w Polsce obejmują
        <BlueTextHighlighter> stworzenie sieci 30 klinik, </BlueTextHighlighter>
        w najkorzystniejszych pod kątem rehabilitacyjno-zdrowotnym miastach.
        Zakładamy zakończenie tego procesu w ciągu najbliższych 6-8 lat.
        <NestedTextContainer>
          Obecne <BlueTextHighlighter> oddziały </BlueTextHighlighter>
          są w pełni wyposażone i
          <BlueTextHighlighter> wyspecjalizowane: </BlueTextHighlighter>
          przedkładamy bowiem specjalistyczną jakość usług nad rozwiązania
          dedykowane pod jak największą pulę świadczeń medycznych.
        </NestedTextContainer>
        Poza rozwiązaniami na skalę globalną preferujemy również rozwiązania w
        mniejszej skali, co zaowocuje
        <BlueTextHighlighter>
          {" "}
          wprowadzeniem kompleksowej obsługi stomatologicznej{" "}
        </BlueTextHighlighter>
        do 5 placówek do końca przyszłego roku.
      </TextContainer>
    </MainContainer>
  );
};
