import { ScheduleApi } from "api/ScheduleApi";
import { UserDetailsApi } from "api/UserDetailsApi";

import { DictionaryItems } from "components/common/DictionaryItems";
import { StyledHeading } from "components/common/form/Form.style";
import { formatDate } from "components/common/Functions";
import {
  MainPanelContainer,
  MainPanelWrapper,
} from "components/common/MainPanel.style";
import {
  Center,
  ItemContainer,
  RightSide,
  ScheduleContainer,
  ScheduleWrapper,
} from "components/common/schedule/Schedule.style";
import { LeftSide, Loader } from "components/global.styles";
import UserContext from "context/UserContext";
import ArrowLeftIcon from "icons/ArrowLeft";
import ArrowRightIcon from "icons/ArrowRight";
import { ScheduleItems } from "models/api/company/ScheduleDto";
import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const PatientSchedule = () => {
  const { currentUser } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [doctors, setDoctors] = useState<DictionaryItems | null>(null);
  const [doctor, setDoctor] = useState<string>("");
  const [formattedDate, setFormattedDate] = useState<string>("");
  const [schedule, setSchedule] = useState<ScheduleItems>();

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
    if (currentUser?.username) {
      try {
        setIsLoading(true);
        const scheduleResult = await ScheduleApi.getscheduleByDay(
          formattedDate,
          doctor
        );
        setSchedule(scheduleResult.data);
      } finally {
        setIsLoading(false);
      }
    }
  }, [doctor]);

  useEffect(() => {
    fetchSchedule();
  }, [fetchDoctor, fetchSchedule]);

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
                {/* {schedule?.items.map((s) => (
                  <CreateLineFromArray
                    schedule={s}
                    patientItems={patientItems as DictionaryItems}
                    clinicItems={clinicItems as DictionaryItems}
                  />
                ))} */}
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
