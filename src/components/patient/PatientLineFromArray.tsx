import { BasicScheduleDto } from "models/api/company/ScheduleDto";
import {
  DataContainer,
  InfoFree,
  InfoUsed,
  StyledHeading,
} from "components/common/schedule/Schedule.style";
import { formatTime } from "../common/Functions";
import { PatientAppointment } from "components/patient/appointment/PatientAppointment";
import { useState } from "react";

interface CreateLineFromArrayProps {
  schedule: BasicScheduleDto;
  doctor: string;
  updateRefresh: (lastRefresh: Date) => void;
}

export const PatientLineFromArray = (props: CreateLineFromArrayProps) => {
  const [refresh, setRefresh] = useState<Date | null>(null);
  const updateRefresh = (lastRefresh: Date) => {
    setRefresh(lastRefresh);
    props.updateRefresh(lastRefresh);
  };
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
            updateRefresh={updateRefresh}
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
