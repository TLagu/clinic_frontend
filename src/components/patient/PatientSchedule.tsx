import { ScheduleApi } from "api/ScheduleApi";
import { UserDetailsApi } from "api/UserDetailsApi";

import { DictionaryItems } from "components/common/DictionaryItems";
import {
  FormContainer,
  StyledHeading,
} from "components/common/form/Form.style";
import { FormLineSelect } from "components/common/form/FormLineSelect";
import { formatDate } from "components/common/Functions";
import {
  MainPanelContainer,
  MainPanelWrapper,
} from "components/common/MainPanel.style";
import { PatientLineFromArray } from "components/patient/PatientLineFromArray";
import {
  Center,
  ItemContainer,
  LeftSide,
  RightSide,
  ScheduleContainer,
  ScheduleWrapper,
} from "components/common/schedule/Schedule.style";
import { Loader } from "components/global.styles";
import UserContext from "context/UserContext";
import ArrowLeftIcon from "icons/ArrowLeft";
import ArrowRightIcon from "icons/ArrowRight";
import { ScheduleItems } from "models/api/company/ScheduleDto";
import {
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { InputContainer } from "components/register/Register.style";

export const PatientSchedule = () => {
  const { currentUser } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [doctors, setDoctors] = useState<DictionaryItems | null>(null);
  const [doctor, setDoctor] = useState<string>("");
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [schedule, setSchedule] = useState<ScheduleItems>();
  const [refresh, setRefresh] = useState<Date | null>(null);

  const navigate = useNavigate();
  const currentDay = new Date(Math.floor(Date.now()));

  const fetchDoctor = useCallback(async () => {
    if (currentUser?.username) {
      try {
        setIsLoading(true);
        const doctorResult = await UserDetailsApi.getDictionaryDoctors();
        setFormattedDate(formatDate(currentDay));
        setDoctors(doctorResult.data);
      } finally {
        setIsLoading(false);
      }
    }
  }, [currentUser?.username]);

  useEffect(() => {
    fetchDoctor();
  }, [fetchDoctor, navigate]);

  const fetchSchedule = useCallback(async () => {
    try {
      setIsLoading(true);
      if (doctor) {
        const scheduleResult = await ScheduleApi.getscheduleByDay(
          formattedDate,
          doctor
        );
        setSchedule(scheduleResult.data);
      }
    } finally {
      setIsLoading(false);
    }
  }, [doctor, formattedDate, refresh]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchDoctor, fetchSchedule, refresh]);

  if (isLoading) {
    return <Loader />;
  }

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

  const updateRefresh = (lastRefresh: Date) => {
    setRefresh(lastRefresh);
  };

  return (
    <MainPanelContainer>
      <MainPanelWrapper>
        <ScheduleContainer>
          <StyledHeading>
            {schedule?.date && formatDate(schedule.date)}
          </StyledHeading>
          <FormContainer>
            <InputContainer>
              <FormLineSelect
                label="Lekarz: "
                onChange={(value: SetStateAction<string>) => setDoctor(value)}
                placeholder="Lekarz..."
                dictionary={doctors as DictionaryItems}
                value={doctor}
              />
            </InputContainer>
          </FormContainer>
          <ScheduleWrapper>
            <LeftSide onClick={onBeforeClicked}>
              <ArrowLeftIcon style={{ height: "36px", width: "36px" }} />
            </LeftSide>
            <Center>
              <ItemContainer>
                {schedule?.items.map((s) => (
                  <PatientLineFromArray
                    schedule={s}
                    doctor={doctor}
                    updateRefresh={updateRefresh}
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
