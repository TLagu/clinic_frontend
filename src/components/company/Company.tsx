import { LeftSide } from "components/global.styles";
import { CompanyDto } from "models/api/company/CompanyDto";
import {
  DataContainer,
  ImportantInfo,
  ItemContainer,
  ItemNestedContainer,
  LineHighlighter,
  RightSide,
} from "./Company.style";
type CompanyProps = {
  company?: CompanyDto;
};

export const Company = ({ company }: CompanyProps) => {
  function createLine(left: string, right: string | undefined) {
    return (
      <DataContainer>
        <LeftSide>
          <span>{left}</span>
        </LeftSide>
        <RightSide>
          <span>{right === undefined ? "" : right}</span>
        </RightSide>
      </DataContainer>
    );
  }

  function createLineFromArray(left: string, right: string[] | undefined) {
    return (
      <DataContainer>
        <LeftSide>
          <span>{left}</span>
        </LeftSide>
        <RightSide>
          <span>
            {right === undefined
              ? ""
              : right.map((s) => (
                  <span key={s}>
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

  let emptyStringArray: string[];
  return (
    <ItemContainer>
      <ImportantInfo>{company?.fullName}</ImportantInfo>
      <>{createLine("Nazwa skrócona", company?.shortName)}</>
      <ItemNestedContainer>
        <>
          <LineHighlighter>{createLine("NIP", company?.nip)}</LineHighlighter>
        </>
        <>{createLine("REGON", company?.regon)}</>
        <>{createLine("KRS", company?.krs)}</>
        <>
          <LineHighlighter>
            {createLine("Numer konta", company?.accountNumber)}
          </LineHighlighter>
        </>
      </ItemNestedContainer>
      <ItemNestedContainer>
        <>{createLine("Wojewdództwo", company?.province)}</>
        <>{createLine("Powiat", company?.district)}</>
        <>{createLine("Gmina", company?.community)}</>
        <>{createLine("Miejscowość", company?.locality)}</>
        <>
          {createLine(
            "Ulica",
            company?.street === null ||
              company?.streetNo === null ||
              company?.flatNo === null
              ? ""
              : concatString([
                  company?.street == null ? "" : company?.street,
                  company?.streetNo == null ? "" : company?.streetNo,
                  company?.flatNo == null ? "" : company?.flatNo,
                ])
          )}
        </>
        <>
          {createLine(
            "Poczta",
            company?.postCode === null || company?.post === null
              ? ""
              : concatString([
                  company?.postCode == null ? "" : company?.postCode,
                  company?.post == null ? "" : company?.post,
                ])
          )}
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
            company?.emails.map((e) => e.email)
          )}
        </>
      </ItemNestedContainer>
      <ItemNestedContainer>
        <>
          {createLineFromArray(
            "Phone",
            company?.phones.map((e) => e.phoneType.type + " - " + e.phone)
          )}
        </>
      </ItemNestedContainer>
    </ItemContainer>
  );
};
