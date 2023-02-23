import { CompanyDto } from "models/api/company/CompanyDto";
import {
  DataContainer,
  ImportantInfo,
  ItemContainer,
  ItemNestedContainer,
  LeftSide,
  LineHighlighter,
  RightSide,
} from "./CompanyItemStyle";
type CompanyItemProps = {
  company: CompanyDto;
};

export const CompanyItem = ({ company }: CompanyItemProps) => {
  function createLine(left: string, right: string) {
    return (
      <DataContainer>
        <LeftSide>
          <span>{left}</span>
        </LeftSide>
        <RightSide>
          <span>{right}</span>
        </RightSide>
      </DataContainer>
    );
  }

  function createLineFromArray(left: string, right: string[]) {
    return (
      <DataContainer>
        <LeftSide>
          <span>{left}</span>
        </LeftSide>
        <RightSide>
          <span>
            {right.map((s) => (
              <span>
                {s}
                <br />
              </span>
            ))}
          </span>
        </RightSide>
      </DataContainer>
    );
  }

  const companyInfo: string =
    "Prosimy o kontakt z Centralą dopiero po uprzednim wykorzystaniu możliwości lokalnych, a także o wybór właściwego adresu e-mail / telefonu do kontaktu, zależnie od typu sprawy.";

  function concatString(table: string[]) {
    return table.join(" ").trim();
  }

  return (
    <ItemContainer>
      <ImportantInfo>{company.fullName}</ImportantInfo>
      <>{createLine("Nazwa skrócona", company.shortName)}</>
      <ItemNestedContainer>
        <>
          <LineHighlighter>{createLine("NIP", company.nip)}</LineHighlighter>
        </>
        <>{createLine("REGON", company.regon)}</>
        <>{createLine("KRS", company.krs)}</>
        <>
          <LineHighlighter>
            {createLine("Numer konta", company.accountNumber)}
          </LineHighlighter>
        </>
      </ItemNestedContainer>
      <ItemNestedContainer>
        <>{createLine("Wojewdództwo", company.province)}</>
        <>{createLine("Powiat", company.district)}</>
        <>{createLine("Gmina", company.community)}</>
        <>{createLine("Miejscowość", company.locality)}</>
        <>
          {createLine(
            "Ulica",
            concatString([company.street, company.streetNo, company.flatNo])
          )}
        </>
        <>
          {createLine("Poczta", concatString([company.postCode, company.post]))}
        </>
      </ItemNestedContainer>
      <ItemNestedContainer>
        <LineHighlighter>
          <>{createLine("!!! UWAGA !!!", companyInfo)}</>
        </LineHighlighter>
      </ItemNestedContainer>
      <ItemNestedContainer>
        <>
          {createLineFromArray(
            "E-mail",
            company.emails.map((e) => e.email)
          )}
        </>
      </ItemNestedContainer>
      <ItemNestedContainer>
        <>
          {createLineFromArray(
            "Phone",
            company.phones.map((e) => e.phoneType + " - " + e.phone)
          )}
        </>
      </ItemNestedContainer>
    </ItemContainer>
  );
};
