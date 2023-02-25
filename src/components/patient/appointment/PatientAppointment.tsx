import { ScheduleApi } from "api/ScheduleApi";
import { UserDetailsApi } from "api/UserDetailsApi";
import {
  FormContainer,
  InputContainer,
  SaveButton,
} from "components/common/form/Form.style";
import { Loader } from "components/global.styles";
import UserContext from "context/UserContext";
import { AppointmentDto } from "models/api/company/ScheduleDto";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface PatientAppointmentProps {
  scheduleUuid: string;
  doctor: string;
}

export const PatientAppointment = (props: PatientAppointmentProps) => {
  const { currentUser } = useContext(UserContext);
  const [patient, setPatient] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<Date | null>(null);

  const navigate = useNavigate();

  const fetchDate = useCallback(async () => {
    try {
      setIsLoading(true);
      const userDetails = await UserDetailsApi.getUser(
        currentUser?.username as string
      );
      setPatient(userDetails.data.uuid);
    } finally {
      setIsLoading(false);
    }
  }, [currentUser?.username, refresh]);

  useEffect(() => {
    fetchDate();
  }, [fetchDate, navigate]);

  const onSaveClicked = useCallback(async () => {
    try {
      const appointment: AppointmentDto = {
        uuid: props.scheduleUuid,
        doctor: props.doctor,
        patient: patient,
      };
      await ScheduleApi.addPatientSchedule(appointment);
      toast.success("Poprawnie zapisano zmiany.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setRefresh(new Date());
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
      navigate("/patient_schedule");
    }
  }, [props.scheduleUuid, props.doctor, patient, navigate]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <FormContainer key={props.scheduleUuid}>
      <InputContainer>
        <SaveButton onClick={onSaveClicked}>Zarezerwuj</SaveButton>
      </InputContainer>
    </FormContainer>
  );
};
