import { useContext, useState } from "react";
import UserContext from "context/UserContext";
import FavoriteIcon from "icons/FavoriteIcon";
import ReturnIcon from "icons/ReturnIcon";
import { ProfilePageSection } from "models/ProfilePageSection";
import {
  HiText,
  LeftSide,
  NameText,
  ProfileContainer,
  ProfileWrapper,
  Option,
  RightSection,
} from "./Profile.style";

export const Profile = () => {
  const { currentUser } = useContext(UserContext);

  const [section, setSection] = useState<ProfilePageSection>(
    ProfilePageSection.Orders
  );

  // TODO Implement other views

  const mapSectionToComponent = () => {
    switch (section) {
      case ProfilePageSection.Returns:
        return <div>Returns</div>;
      case ProfilePageSection.Favorites:
        return <div>Favorites</div>;
    }
  };

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <LeftSide>
          <HiText>Cześć</HiText>
          <NameText>{currentUser?.username}</NameText>
          <Option onClick={() => setSection(ProfilePageSection.Returns)}>
            <ReturnIcon />
            <span>Zwroty i reklamacje</span>
          </Option>
          <Option onClick={() => setSection(ProfilePageSection.Favorites)}>
            <FavoriteIcon />
            <span>Listy zakupowe</span>
          </Option>
        </LeftSide>
        <RightSection>{mapSectionToComponent()}</RightSection>
      </ProfileWrapper>
    </ProfileContainer>
  );
};
