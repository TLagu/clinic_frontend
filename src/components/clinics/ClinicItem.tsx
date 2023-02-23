import { ClinicDto } from "models/api/company/ClinicDto";
import {
  DataContainer,
  ImportantInfo,
  ItemContainer,
  LeftSide,
  LineHighlighter,
  RightSide,
} from "./ClinicItem.style";
type ClinicItemProps = {
  clinic: ClinicDto;
};

export const ClinicItem = ({ clinic }: ClinicItemProps) => {
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
    <ItemContainer key={clinic.uuid}>
      <ImportantInfo>{clinic.clinicName}</ImportantInfo>
      <>{createLine("Wojewdództwo", clinic.province)}</>
      <>{createLine("Powiat", clinic.district)}</>
      <>{createLine("Gmina", clinic.community)}</>
      <>{createLine("Miejscowość", clinic.locality)}</>
      <>
        <LineHighlighter>
          {createLine(
            "Ulica",
            concatString([clinic.street, clinic.streetNo, clinic.flatNo])
          )}
        </LineHighlighter>
      </>
      <>
        <LineHighlighter>
          {createLine("Poczta", concatString([clinic.postCode, clinic.post]))}
        </LineHighlighter>
      </>
      <>
        {createLineFromArray(
          "E-mail",
          clinic.emails.map((e) => e.email)
        )}
      </>
      <>
        {createLineFromArray(
          "Phone",
          clinic.phones.map((e) => e.phoneType.type + " - " + e.phone)
        )}
      </>
      <>
        <LineHighlighter>
          {createLine("Opis", clinic.description)}
        </LineHighlighter>
      </>
    </ItemContainer>
  );
};
