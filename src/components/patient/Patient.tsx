import { UserDetailsApi } from "api/UserDetailsApi";
import { UserDto } from "models/api/company/UserDto";
import UserContext from "context/UserContext";
import { PatientPageSection } from "models/PatientPageSection";
import { useCallback, useContext, useEffect, useState } from "react";
import {
  HiText,
  LeftSide,
  SurnameText,
  PatientContainer,
  PatientWrapper,
  RightSide,
  Option,
  NameText,
  LeftSideDivider,
} from "./Patient.style";
import { Schedule } from "./schedule/Schedule";
import UserIcon from "icons/UserIcon";
import CalendarIcon from "icons/CalendarIcon";
import AppointmentIcon from "icons/AppointmentIcon";
import { Account } from "./account/Account";
import PatientAccountSmile from "icons/PatientAccountSmile";

export const Patient = () => {
  const [user, setUser] = useState<UserDto | null>(null);
  const [section, setSection] = useState<PatientPageSection>(
    PatientPageSection.MedicalVisit
  );

  const { currentUser } = useContext(UserContext);

  const fetchUser = useCallback(async () => {
    if (currentUser?.username) {
      const userDetails = await UserDetailsApi.getUser(currentUser?.username);
      setUser(userDetails.data);
    }
  }, [currentUser?.username]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const mapSectionToComponent = () => {
    switch (section) {
      case PatientPageSection.MedicalVisit:
        return <div>Wizyta</div>;
      case PatientPageSection.Schedule:
        return (
          <div>
            <Schedule />
          </div>
        );
      case PatientPageSection.Account:
        return (
          <div>
            <Account />
          </div>
        );
    }
  };

  return (
    <PatientContainer>
      <PatientWrapper>
        <LeftSide>
          <LeftSideDivider>
          <HiText>Dzień dobry<PatientAccountSmile /> </HiText>
          <NameText>
            {[user?.userAppDetails?.firstName, user?.userAppDetails?.secondName]
              .filter(Boolean)
              .join(" ")}
          </NameText>
          <SurnameText>
            {[user?.userAppDetails?.lastName].filter(Boolean).join(" ")}
          </SurnameText>
          </LeftSideDivider>
          <LeftSideDivider>
          <Option onClick={() => setSection(PatientPageSection.MedicalVisit)}>
            <AppointmentIcon />
            <span>Wizyta</span>
          </Option>
          <Option onClick={() => setSection(PatientPageSection.Schedule)}>
            <CalendarIcon />
            <span>Harmonogram</span>
          </Option>
          <Option onClick={() => setSection(PatientPageSection.Account)}>
            <UserIcon />
            <span>Konto</span>
          </Option>
          </LeftSideDivider>
        </LeftSide>
        <RightSide>{mapSectionToComponent()}</RightSide>
      </PatientWrapper>
    </PatientContainer>
  );
};
