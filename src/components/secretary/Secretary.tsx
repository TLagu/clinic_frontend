import { StyledHeading } from "components/global.styles";
import { SecretaryContainer } from "./Secretary.style";

export const Secretary = () => {
  return (
    <SecretaryContainer>
      <StyledHeading>Witaj w panelu sekretariatu</StyledHeading>
      <span>Tutaj możesz się wyklikać do woli</span>
    </SecretaryContainer>
  );
};
