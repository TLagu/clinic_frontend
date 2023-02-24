import { ScheduleApi } from "api/ScheduleApi";
import { Loader } from "components/clinics/Clinics.style";
import { DictionaryItems } from "components/common/DictionaryItems";
import {
  FormContainer,
  InputContainer,
  SaveButton,
} from "components/common/form/Form.style";
import { FormLineInput } from "components/common/form/FormLineInput";
import { FormLineLabels } from "components/common/form/FormLineLabels";
import { AppointmentDto } from "models/api/company/ScheduleDto";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isAppointmentValid } from "./DoctorAppointmentValidation";

interface AppointmentProps {
  visible: boolean;
  patients: DictionaryItems;
  clinics: DictionaryItems;
  appointmentUuid: string;
}

export const Appointment = (props: AppointmentProps) => {
  const [patient, setPatient] = useState<string>("");
  const [clinic, setClinic] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [recommendations, setRecommendations] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isDescriptionValid, setIsDescriptionValid] = useState<boolean>(true);
  const [isRecommendationsValid, setIsRecommendationsValid] =
    useState<boolean>(true);

  const navigate = useNavigate();

  const fetchDate = useCallback(async () => {
    try {
      setIsLoading(true);
      const appointment = await ScheduleApi.getAppointmentByUuid(
        props.appointmentUuid as string
      );
      setPatient(appointment.data.patient as string);
      setClinic(appointment.data.clinic as string);
      setDescription(appointment.data.description as string);
      setRecommendations(appointment.data.recommendations as string);
    } finally {
      setIsLoading(false);
    }
  }, [props.appointmentUuid]);

  useEffect(() => {
    fetchDate();
  }, [fetchDate, navigate]);

  useEffect(() => {
    setIsDescriptionValid(isAppointmentValid(description, "description"));
  }, [description]);

  useEffect(() => {
    setIsRecommendationsValid(
      isAppointmentValid(recommendations, "recommendations")
    );
  }, [recommendations]);

  const onSaveClicked = useCallback(async () => {
    try {
      const appointmentRequest: AppointmentDto = {
        uuid: props.appointmentUuid,
        doctor: "",
        description: description,
        recommendations: recommendations,
      };
      await ScheduleApi.updateSchedule(appointmentRequest);
      toast.success("Poprawnie zapisano zmiany.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error: any) {
      let errorMessage;
      if (error.response && error.response.status === 401) {
        errorMessage = "Podałeś błędne dane, spróbuj ponownie.";
      } else {
        errorMessage = "Wystąpił błąd podczas połączenia z serwerem.";
      }
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate("/doctor_schedule");
    }
  }, [description, recommendations, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FormContainer key={props.appointmentUuid}>
      <InputContainer>
        <FormLineLabels
          label="Pacjent:"
          dictionary={props.patients}
          value={patient}
        />
      </InputContainer>
      <InputContainer>
        <FormLineLabels
          label="Klinika:"
          dictionary={props.clinics}
          value={clinic}
        />
      </InputContainer>
      <InputContainer>
        <FormLineInput
          label="Opis:"
          placeholder="Opis..."
          type="text"
          value={description}
          onChange={(value) => setDescription(value)}
          validationResult={isDescriptionValid}
          validationMessage={`Proszę wypełnić opis wizyty.`}
        />
      </InputContainer>
      <InputContainer>
        <FormLineInput
          label="Zalecenia:"
          placeholder="Zalecenia..."
          type="text"
          value={recommendations}
          onChange={(value) => setRecommendations(value)}
          validationResult={isRecommendationsValid}
          validationMessage={`Proszę wypełnić zalecenia.`}
        />
      </InputContainer>
      <InputContainer>
        <SaveButton
          disabled={!isDescriptionValid || !isRecommendationsValid}
          onClick={onSaveClicked}
        >
          Zapisz
        </SaveButton>
      </InputContainer>
    </FormContainer>
  );
};
