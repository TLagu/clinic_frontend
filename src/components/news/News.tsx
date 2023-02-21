import {
  NewsContainer,
  NewsTimestamp,
  NewsHeader,
  StyledHeading,
  NewsHeaderContainer,
  NewsTextContainer,
  BlueTextHighlighter,
  BlackTextHighlighter,
  NestedTextContainer,
} from "./News.style";

export const News = () => {
  return (
    <NewsContainer>
      <StyledHeading>Nowości medyczne z kraju i ze świata</StyledHeading>
      <NewsHeaderContainer>
        <NewsHeader>
          <NewsTimestamp>22 lutego 2023, 19:25</NewsTimestamp>
          <BlueTextHighlighter>Wrocław:</BlueTextHighlighter> w czasie jednego
          zabiegu 55-letniej kobiecie zabiegu zoperowano 2 tętniaki i guza mózgu
        </NewsHeader>
      </NewsHeaderContainer>
      <NewsTextContainer>
        Lekarze z Dolnośląskiego Szpitala Specjalistycznego im. T. Marciniaka
        zoperowali 55-letniej pacjentce dwa tętniaki i guza mózgu w czasie
        jednego zabiegu. Jeden z tętniaków znajdował się na tętnicy móżdżkowej
        górnej. Jak podkreślono w komunikacie szpitala, to bardzo rzadko
        operowany typ tętniaka, bardzo głęboko położony i trudno dostępny.
      </NewsTextContainer>
      <NewsHeaderContainer>
        <NewsHeader>
          <NewsTimestamp>15 lutego 2023, 14:25</NewsTimestamp>
          <BlueTextHighlighter>Kraków:</BlueTextHighlighter> święto przyszłych
          rodziców: w szpitalu uniwersyteckim urodziły się pięcioraczki
        </NewsHeader>
      </NewsHeaderContainer>
      <NewsTextContainer>
        W niedzielę 12.02.23 przyszły na świat pięcioraczki: 3 dziewczynki i 2
        chłopców. Dzieci urodziły się przez cesarskie cięcie w 28. tygodniu
        ciąży. Ważyły od 710 do 1400 g. i mierzyły ok. 40 cm.
      </NewsTextContainer>
      <NewsHeaderContainer>
        <NewsHeader>
          <NewsTimestamp>10 lutego 2023, 10:40</NewsTimestamp>
          <BlueTextHighlighter>Stany Zjednoczone:</BlueTextHighlighter>{" "}
          obiecujące wyniki testów klinicznych szczepionki przeciwko wirusowi
          Marburg
        </NewsHeader>
      </NewsHeaderContainer>
      <NewsTextContainer>
        Amerykański Narodowy Instytut Alergii i Chorób Zakaźnych poinformował o
        pozytywnych wynikach I fazy testów klinicznych pierwszej szczepionki
        przeciwko wirusowi Marburg (MARV). To należący do tej samej rodziny co
        Ebola wirus powodujący gorączki krwotoczne. Marburg jest jednak znacznie
        bardziej śmiercionośny.
      </NewsTextContainer>
      <NewsHeaderContainer>
        <NewsHeader>
          <NewsTimestamp>3 lutego 2023, 04:15</NewsTimestamp>
          <BlueTextHighlighter>Dania:</BlueTextHighlighter> nowo odkryta
          struktura mózgu może mieć wpływ na Alzheimera czy stwardnienie
          rozsiane
        </NewsHeader>
      </NewsHeaderContainer>
      <NewsTextContainer>
        Nowo odkryta struktura w mózgu może być zaangażowana w rozwój takich
        chorób jak stwardnienie rozsiane, choroba Alzheimera czy infekcje
        centralnego układu nerwowego, mówią naukowcy z Uniwersytetu w
        Kopenhadze. Nowa warstwa oponowa, nazwana przez odkrywców SLYM działa
        jak warstwa ochronna, oraz miejsce, z którego układ odpornościowego
        monitorują mózg.
      </NewsTextContainer>
      <StyledHeading>Nowości medyczne z naszych Klinik</StyledHeading>
      <NewsHeaderContainer>
        <NewsHeader>
          <NewsTimestamp>26 lutego 2023, 08:03</NewsTimestamp>
          <BlueTextHighlighter>Piotrków Trybunalski: </BlueTextHighlighter>{" "}
          pierwsze Ekskluzywne Centrum Stomatologiczne powstanie właśnie tu!
        </NewsHeader>
      </NewsHeaderContainer>
      <NewsTextContainer>
        "Najtrudniejszy pierwszy krok" - jak śpiewała Anna Jantar. W Piotrkowie
        ten krok już został poczyniony i przy ulicy Borowania 7/9 powstanie
        nasza pierwsza placówka stomatologiczna.{" "}
        <NestedTextContainer>
          <BlackTextHighlighter>
            Wielkie otwarcie i dzień zwiedzania zaplanowano na 01.04.2023.
          </BlackTextHighlighter>
        </NestedTextContainer>
        <NestedTextContainer>
          Począwszy od dnia następnego placówka będzie funkcjonować w pełnej
          krasie przyjmując Pacjentów od godziny 7:00 do 21:00 w każdy dzień
          tygodnia z wyjątkiem niedzieli.{" "}
        </NestedTextContainer>
        <NestedTextContainer>
          Przez pierwszy miesiąc obowiązuje{" "}
          <BlackTextHighlighter>Złoty Ząbek</BlackTextHighlighter> czyli 20%
          zniżki na wszelkie usługi stomatologiczne. Zapraszamy!
        </NestedTextContainer>
      </NewsTextContainer>
    </NewsContainer>
  );
};
