import { useCallback, useContext, useEffect, useState } from "react";
import UserContext from "context/UserContext";
import { UserDetailsApi } from "api/UserDetailsApi";
import { UserDto } from "models/api/company/UserDto";
import { DoctorPageSection } from "models/DoctorPageSection";
import {
  HiText,
  LeftSide,
  NameText,
  DoctorContainer,
  DoctorWrapper,
  Option,
  RightSection,
} from "./Doctor.style";
import AppointmentIcon from "icons/AppointmentIcon";
import CalendarIcon from "icons/CalendarIcon";
import UserIcon from "icons/UserIcon";
import { Account } from "./account/Account";

export const Doctor = () => {
  const { currentUser } = useContext(UserContext);
  const [user, setUser] = useState<UserDto | null>(null);

  const [section, setSection] = useState<DoctorPageSection>(
    DoctorPageSection.MedicalVisit
  );

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
      case DoctorPageSection.MedicalVisit:
        return <div>Wizyta</div>;
      case DoctorPageSection.Schedule:
        return <div>Harmonogram</div>;
      case DoctorPageSection.Account:
        return (
          <div>
            <Account />
          </div>
        );
    }
  };

  return (
    <DoctorContainer>
      <DoctorWrapper>
        <LeftSide>
          <HiText>Witaj</HiText>
          <NameText>
            {[
              user?.userAppDetails?.firstName,
              user?.userAppDetails?.secondName,
              user?.userAppDetails?.lastName,
            ]
              .filter(Boolean)
              .join(" ")}
          </NameText>
          <Option onClick={() => setSection(DoctorPageSection.MedicalVisit)}>
            <AppointmentIcon />
            <span>Wizyta</span>
          </Option>
          <Option onClick={() => setSection(DoctorPageSection.Schedule)}>
            <CalendarIcon />
            <span>Harmonogram</span>
          </Option>
          <Option onClick={() => setSection(DoctorPageSection.Account)}>
            <UserIcon />
            <span>Konto</span>
          </Option>
        </LeftSide>
        <RightSection>{mapSectionToComponent()}</RightSection>
      </DoctorWrapper>
    </DoctorContainer>
  );
};
