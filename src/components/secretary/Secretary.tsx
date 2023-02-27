import { StyledHeader } from "components/global.styles";
import { SecretaryContainer } from "./Secretary.style";

export const Secretary = () => {
  return (
    <SecretaryContainer>
      <StyledHeader>Witaj w panelu sekretariatu</StyledHeader>
      <span>Tutaj możesz się wyklikać do woli</span>
    </SecretaryContainer>
  );
};
