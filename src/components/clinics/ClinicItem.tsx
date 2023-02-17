import { ClinicDto } from "models/api/company/ClinicDto";
import {
  DataContainer,
  ImportantInfo,
  ItemContainer,
  LeftSide,
  RightSide,
} from "./ClinicItem.styles";
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
    <ItemContainer>
      <ImportantInfo>{clinic.clinicName}</ImportantInfo>
      <>{createLine("Wojewdództwo", clinic.province)}</>
      <>{createLine("Powiat", clinic.district)}</>
      <>{createLine("Gmina", clinic.community)}</>
      <>{createLine("Miejscowość", clinic.locality)}</>
      <>
        {createLine(
          "Ulica",
          concatString([clinic.street, clinic.streetNo, clinic.flatNo])
        )}
      </>
      <>{createLine("Poczta", concatString([clinic.postCode, clinic.post]))}</>
      <>
        {createLineFromArray(
          "E-mail",
          clinic.emails.map((e) => e.email)
        )}
      </>
      <>
        {createLineFromArray(
          "Phone",
          clinic.phones.map((e) => e.phoneType + " - " + e.phone)
        )}
      </>
      <>{createLine("Opis", clinic.description)}</>
    </ItemContainer>
  );
};
