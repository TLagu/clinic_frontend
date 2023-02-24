import { ClinicApi } from "api/ClinicApi";
import { ScheduleApi } from "api/ScheduleApi";
import { UserDetailsApi } from "api/UserDetailsApi";
import { DictionaryItems } from "components/common/DictionaryItems";
import UserContext from "context/UserContext";
import ArrowLeftIcon from "icons/ArrowLeft";
import ArrowRightIcon from "icons/ArrowRight";
import { ScheduleItems } from "models/api/company/ScheduleDto";
import { UserDto } from "models/api/company/UserDto";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainPanelContainer,
  MainPanelWrapper,
} from "components/common/MainPanel.style";
import {
  Center,
  ItemContainer,
  LeftSide,
  RightSide,
  ScheduleContainer,
  ScheduleWrapper,
  StyledHeading,
} from "components/common/schedule/Schedule.style";
import { formatDate } from "components/common/Functions";
import { CreateLineFromArray } from "components/common/schedule/CreateLineFromArray";
import { Loader } from "components/global.styles";

export const DoctorSchedule = () => {
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

  return (
    <MainPanelContainer>
      <MainPanelWrapper>
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
                {schedule?.items.map((s) => (
                  <CreateLineFromArray
                    schedule={s}
                    patientItems={patientItems as DictionaryItems}
                    clinicItems={clinicItems as DictionaryItems}
                  />
                ))}
              </ItemContainer>
            </Center>
            <RightSide onClick={onAfterClicked}>
              <ArrowRightIcon style={{ height: "36px", width: "36px" }} />
            </RightSide>
          </ScheduleWrapper>
        </ScheduleContainer>
      </MainPanelWrapper>
    </MainPanelContainer>
  );
};
