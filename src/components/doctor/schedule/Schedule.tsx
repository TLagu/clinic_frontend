import { ScheduleApi } from "api/ScheduleApi";
import { UserDetailsApi } from "api/UserDetailsApi";
import { Loader } from "components/clinics/Clinics.style";
import UserContext from "context/UserContext";
import ArrowLeftIcon from "icons/ArrowLeft";
import ArrowRightIcon from "icons/ArrowRight";
import { ScheduleItems } from "models/api/company/ScheduleDto";
import { UserDto } from "models/api/company/UserDto";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const fetchSchedule = useCallback(async () => {
    try {
      if (user?.uuid) {
        setIsLoading(true);
        const scheduleResult = await ScheduleApi.getscheduleByDay(
          formattedDate,
          !user?.uuid ? "" : user?.uuid
        );
        setSchedule(scheduleResult.data);
        console.log(scheduleResult);
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

  function createLineFromArray(
    uuid: string,
    startTime: Date,
    endTime: Date,
    appointment: string
  ) {
    return (
      <DataContainer key={uuid}>
        {!appointment ? (
          <InfoFree>
            {formatTime(startTime) + " - " + formatTime(endTime) + " (Wolne)"}
          </InfoFree>
        ) : (
          <InfoUsed>
            {formatTime(startTime) + " - " + formatTime(endTime) + " (Wizyta)"}
          </InfoUsed>
        )}
      </DataContainer>
    );
  }

  return (
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
            {schedule?.items.map((s) =>
              createLineFromArray(
                s.uuid,
                s.startTime,
                s.endTime,
                !s.appointment ? "" : s.appointment
              )
            )}
          </ItemContainer>
        </Center>
        <RightSide onClick={onAfterClicked}>
          <ArrowRightIcon style={{ height: "36px", width: "36px" }} />
        </RightSide>
      </ScheduleWrapper>
    </ScheduleContainer>
  );
};
