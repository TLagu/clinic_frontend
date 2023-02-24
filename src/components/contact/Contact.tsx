import { CompanyApi } from "api/CompanyApi";
import { Company } from "components/company/Company";
import { CompanyDto } from "models/api/company/CompanyDto";
import { useCallback, useEffect, useState } from "react";
import {
  CompanyContainer,
  ItemsContainer,
  Loader,
  StyledHeading,
} from "./Contact.style";

export const Contact = () => {
  const [company, setCompany] = useState<CompanyDto | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchCompany = useCallback(async () => {
    try {
      const result = await CompanyApi.getCompanyData();
      setCompany(result.data);
      console.log("company");
      console.log(company);
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
      <StyledHeading>Kontakt</StyledHeading>
      <ItemsContainer>
        <Company company={company as any} />
      </ItemsContainer>
    </CompanyContainer>
  );
};
