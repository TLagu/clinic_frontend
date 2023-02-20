import { useCallback, useContext, useEffect, useState } from "react";
import UserContext from "context/UserContext";
import { UserDetailsApi } from "api/UserDetailsApi";
import FavoriteIcon from "icons/FavoriteIcon";
import ReturnIcon from "icons/ReturnIcon";
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
import { UserDto } from "models/api/company/UserDto";

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

  // TODO Implement other views

  const mapSectionToComponent = () => {
    switch (section) {
      case DoctorPageSection.MedicalVisit:
        return <div>Wizyta</div>;
      case DoctorPageSection.Schedule:
        return <div>Harmonogram</div>;
    }
  };

  console.log(user);

  return (
    <DoctorContainer>
      <DoctorWrapper>
        <LeftSide>
          <HiText>Witaj</HiText>
          <NameText>
            {[
              user?.user?.firstName,
              user?.user?.secondName,
              user?.user?.lastName,
            ]
              .filter(Boolean)
              .join(" ")}
          </NameText>
          <Option onClick={() => setSection(DoctorPageSection.MedicalVisit)}>
            <ReturnIcon />
            <span>Wizyta</span>
          </Option>
          <Option onClick={() => setSection(DoctorPageSection.Schedule)}>
            <FavoriteIcon />
            <span>Harmonogram</span>
          </Option>
        </LeftSide>
        <RightSection>{mapSectionToComponent()}</RightSection>
      </DoctorWrapper>
    </DoctorContainer>
  );
};
