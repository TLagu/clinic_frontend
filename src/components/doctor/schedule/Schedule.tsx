import { ClinicApi } from "api/ClinicApi";
import { ScheduleApi } from "api/ScheduleApi";
import { UserDetailsApi } from "api/UserDetailsApi";
import { Loader } from "components/clinics/Clinics.style";
import { DictionaryItems } from "components/common/DictionaryItems";
import UserContext from "context/UserContext";
import ArrowLeftIcon from "icons/ArrowLeft";
import ArrowRightIcon from "icons/ArrowRight";
import {
  BasicScheduleDto,
  ScheduleItems,
} from "models/api/company/ScheduleDto";
import { UserDto } from "models/api/company/UserDto";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DoctorContainer, DoctorWrapper } from "../Doctor.style";
import { Appointment } from "./appointment/Appointment";
import {
  Center,
  DataContainer,
  InfoFree,
  InfoUsed,
  ItemContainer,
  LeftSide,
  RightSide,
  ScheduleContainer,
  ScheduleWrapper,
  StyledHeading,
} from "./Schedule.style";

export const Schedule = () => {
  const { currentUser } = useContext(UserContext);
  const [user, setUser] = useState<UserDto | null>(null);
  const [schedule, setSchedule] = useState<ScheduleItems>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [patientItems, setPatientItems] = useState<DictionaryItems | null>(
    null
  );
  const [clinicItems, setClinicItems] = useState<DictionaryItems | null>(null);

  const currentDay = new Date(Math.floor(Date.now()));

  function formatDate(date: Date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  function formatTime(date: Date) {
    var d = new Date(date),
      hour = "" + (d.getHours() + 1),
      minute = "" + d.getMinutes();

    if (hour.length < 2) hour = "0" + hour;
    if (minute.length < 2) minute = "0" + minute;

    return [hour, minute].join(":");
  }

  const navigate = useNavigate();

  const fetchDate = useCallback(async () => {
    if (currentUser?.username) {
      try {
        setIsLoading(true);
        const userDetails = await UserDetailsApi.getUser(currentUser?.username);
        setUser(userDetails.data);
        setFormattedDate(formatDate(currentDay));
      } finally {
        setIsLoading(false);
      }
    }
  }, [currentUser?.username]);

  useEffect(() => {
    fetchDate();
  }, [fetchDate, navigate]);

  const fetchPatient = useCallback(async () => {
    if (currentUser?.username) {
      try {
        setIsLoading(true);
        const patients = await UserDetailsApi.getDictionaryPatients();
        setPatientItems(patients.data);
      } finally {
        setIsLoading(false);
      }
    }
  }, [currentUser?.username]);

  useEffect(() => {
    fetchPatient();
  }, [fetchPatient, navigate]);

  const fetchClinic = useCallback(async () => {
    if (currentUser?.username) {
      try {
        setIsLoading(true);
        const clinics = await ClinicApi.getDictionaryClinic();
        setClinicItems(clinics.data);
      } finally {
        setIsLoading(false);
      }
    }
  }, [currentUser?.username]);

  useEffect(() => {
    fetchClinic();
  }, [fetchClinic, navigate]);

  const fetchSchedule = useCallback(async () => {
    try {
      if (user?.uuid) {
        setIsLoading(true);
        const scheduleResult = await ScheduleApi.getscheduleByDay(
          formattedDate,
          user?.uuid as string
        );
        setSchedule(scheduleResult.data);
      }
    } finally {
      setIsLoading(false);
    }
  }, [user?.uuid, formattedDate]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchDate, fetchSchedule]);

  const onBeforeClicked = () => {
    let date = new Date(formattedDate);
    date.setDate(date.getDate() - 1);
    setFormattedDate(formatDate(date));
  };

  const onAfterClicked = () => {
    let date = new Date(formattedDate);
    date.setDate(date.getDate() + 1);
    setFormattedDate(formatDate(date));
  };

  if (isLoading) {
    return <Loader />;
  }

  function createLineFromArray(schedule: BasicScheduleDto) {
    return (
      <DataContainer key={schedule.uuid}>
        {!schedule.appointment ? (
          <InfoFree>
            {formatTime(schedule.startTime as Date) +
              " - " +
              formatTime(schedule.endTime as Date) +
              " (Wolne)"}
          </InfoFree>
        ) : (
          <InfoUsed>
            {formatTime(schedule.startTime as Date) +
              " - " +
              formatTime(schedule.endTime as Date) +
              " (Wizyta)"}
            <Appointment
              key={schedule.uuid}
              patients={patientItems as any}
              clinics={clinicItems as any}
              visible={false}
              appointmentUuid={schedule.appointment}
            />
          </InfoUsed>
        )}
      </DataContainer>
    );
  }

  return (
    <DoctorContainer>
      <DoctorWrapper>
        <ScheduleContainer>
          <StyledHeading>
            {schedule?.date && formatDate(schedule.date)}
          </StyledHeading>
          <ScheduleWrapper>
            <LeftSide onClick={onBeforeClicked}>
              <ArrowLeftIcon style={{ height: "36px", width: "36px" }} />
            </LeftSide>
            <Center>
              <ItemContainer>
                {schedule?.items.map((s) => createLineFromArray(s))}
              </ItemContainer>
            </Center>
            <RightSide onClick={onAfterClicked}>
              <ArrowRightIcon style={{ height: "36px", width: "36px" }} />
            </RightSide>
          </ScheduleWrapper>
        </ScheduleContainer>
      </DoctorWrapper>
    </DoctorContainer>
  );
};
