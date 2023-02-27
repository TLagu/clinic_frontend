import { CompanyApi } from "api/CompanyApi";
import { Company } from "components/company/Company";
import { Loader, StyledHeader } from "components/global.styles";
import { CompanyDto } from "models/api/company/CompanyDto";
import { useCallback, useEffect, useState } from "react";
import { CompanyContainer, ItemsContainer } from "./Contact.style";

export const Contact = () => {
  const [company, setCompany] = useState<CompanyDto | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCompany = useCallback(async () => {
    try {
      const result = await CompanyApi.getCompanyData();
      setCompany(result.data);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCompany();
  }, [fetchCompany]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <CompanyContainer>
      <StyledHeader>Kontakt</StyledHeader>
      <ItemsContainer>
        <Company company={company as any} />
      </ItemsContainer>
    </CompanyContainer>
  );
};
