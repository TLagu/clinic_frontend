import { CompanyDto } from "models/api/company/CompanyDto";
import {
  DataContainer,
  ImportantInfo,
  ItemContainer,
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
  function concatString(table: string[]) {
    return table.join(" ").trim();
  }
  return (
    <ItemContainer>
      <ImportantInfo>{company.fullName}</ImportantInfo>
      <>{createLine("Nazwa skrócona", company.shortName)}</>
      <>{createLine("NIP", company.nip)}</>
      <>{createLine("REGON", company.regon)}</>
      <>{createLine("KRS", company.krs)}</>
      <>{createLine("Numer konta", company.accountNumber)}</>
      <>{createLine("Wojewdództwo", company.province)}</>
      <>{createLine("Powiat", company.district)}</>
      <>{createLine("Gmina", company.community)}</>
      <>{createLine("Miejscowość", company.locality)}</>
      <>
        <LineHighlighter>
          {createLine(
            "Ulica",
            concatString([company.street, company.streetNo, company.flatNo])
          )}
        </LineHighlighter>
      </>
      <>
        <LineHighlighter>
          {createLine("Poczta", concatString([company.postCode, company.post]))}
        </LineHighlighter>
      </>
      <>
        {createLineFromArray(
          "E-mail",
          company.emails.map((e) => e.email)
        )}
      </>
      <>
        {createLineFromArray(
          "Phone",
          company.phones.map((e) => e.phoneType + " - " + e.phone)
        )}
      </>
    </ItemContainer>
  );
};
