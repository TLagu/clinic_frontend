import { DictionaryItems } from "components/common/DictionaryItems";
import {
  FormContainer,
  InputContainer,
  StyledHeading,
} from "components/form/Form.style";
import { FormLineInput } from "components/form/FormLineInput";
import { FormLineSelect } from "components/form/FormLineSelect";
import { AppointmentDto } from "models/api/company/ScheduleDto";
import { useEffect, useState } from "react";
import { isAppointmentValid } from "./AppointmentValidation";

interface AppointmentProps {
  visible: boolean;
  patients: DictionaryItems;
  appointment: AppointmentDto;
}

export const Appointment = (props: AppointmentProps) => {
  const [patient, setPatient] = useState<string>(
    !props.appointment.patient ? "" : props.appointment.patient
  );

  const [isPatientValid, setIsPatientValid] = useState<boolean>(true);

  useEffect(() => {
    setIsPatientValid(isAppointmentValid(patient, "patient"));
  }, [patient]);

  return (
    <FormContainer>
      <StyledHeading>Dane użytkownika:</StyledHeading>
      <InputContainer>
        <FormLineSelect
          key={props.appointment.uuid}
          label="Pacjent:"
          placeholder="Pacjent..."
          value={!props.appointment.patient ? "" : props.appointment.patient}
          dictionary={props.patients}
          onChange={(value) => setPatient(value)}
          validationResult={isPatientValid}
          validationMessage={`Wprowadź poprawnie pacjenta.\nPacjent musi zostać wybrany.`}
        />
      </InputContainer>
    </FormContainer>
  );
};
