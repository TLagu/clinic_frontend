import { BasicScheduleDto } from "models/api/company/ScheduleDto";
import {
  DataContainer,
  InfoFree,
  InfoUsed,
  StyledHeading,
} from "components/common/schedule/Schedule.style";
import { formatTime } from "../common/Functions";
import { PatientAppointment } from "components/patient/appointment/PatientAppointment";

interface CreateLineFromArrayProps {
  schedule: BasicScheduleDto;
  doctor: string;
}

export const PatientLineFromArray = (props: CreateLineFromArrayProps) => {
  return (
    <DataContainer key={props.schedule.uuid}>
      {!props.schedule.appointment ? (
        <InfoFree>
          <StyledHeading>
            {formatTime(props.schedule.startTime as Date) +
              " - " +
              formatTime(props.schedule.endTime as Date) +
              " (Wolne)"}
          </StyledHeading>
          <PatientAppointment
            key={props.schedule.uuid}
            scheduleUuid={props.schedule.uuid as string}
            doctor={props.doctor}
          />
        </InfoFree>
      ) : (
        <InfoUsed>
          {formatTime(props.schedule.startTime as Date) +
            " - " +
            formatTime(props.schedule.endTime as Date) +
            " (Wizyta)"}
        </InfoUsed>
      )}
    </DataContainer>
  );
};
