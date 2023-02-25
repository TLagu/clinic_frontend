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
  updateRefresh: (lastRefresh: Date) => void;
}

export const PatientAppointment = (props: PatientAppointmentProps) => {
  const { currentUser } = useContext(UserContext);
  const [patient, setPatient] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  let lastRefresh: Date;
  const handleRefresh = () => {
    props.updateRefresh(lastRefresh);
  };
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
  }, [currentUser?.username]);

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
      lastRefresh = Date.now() as any;
      handleRefresh();
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
