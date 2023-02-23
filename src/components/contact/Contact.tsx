import { CompanyApi } from "api/CompanyApi";
import { CompanyItem } from "components/company/CompanyItem";
import { CompanyDto } from "models/api/company/CompanyDto";
import { PageableResponse } from "models/api/PageableResponse";
import { useCallback, useEffect, useState } from "react";
import {
  CompanyContainer,
  ItemsContainer,
  Loader,
  StyledHeading,
} from "./Contact.style";

export const Company = () => {
  const [company, setCompany] = useState<PageableResponse<CompanyDto> | null>(
    null
  );
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await CompanyApi.getCompanyData(pageNumber);
      setCompany(result.data);
    } finally {
      setIsLoading(false);
    }
  }, [pageNumber]);

  const onPageChanged = (number: number) => {
    setPageNumber(number - 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, pageNumber]);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <CompanyContainer>
      <StyledHeading>Kontakt</StyledHeading>
      {company?.content && company.content.length > 0 ? (
        <>
          <ItemsContainer>
            {company?.content.map((x) => (
              <CompanyItem company={x} />
            ))}
          </ItemsContainer>
        </>
      ) : (
        <h2>Brak danych</h2>
      )}
    </CompanyContainer>
  );
};
