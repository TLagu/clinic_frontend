import { useState, useCallback, useEffect } from "react";
import { ClinicApi } from "api/ClinicApi";
import { PageableResponse } from "models/api/PageableResponse";
import { ClinicDto } from "models/api/company/ClinicDto";
import { PaginationItem } from "components/store/PaginationItem";
import {
  ItemsContainer,
  Loader,
  PaginationContainer,
  ClinicsContainer,
  StyledHeading,
} from "./Clinics.style";
import { ClinicItem } from "./ClinicItem";

export const Clinics = () => {
  const [clinics, setClinics] = useState<PageableResponse<ClinicDto> | null>(
    null
  );
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await ClinicApi.getAllClinics(pageNumber);
      console.log(result.data);
      setClinics(result.data);
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
    <ClinicsContainer>
      <StyledHeading>Lista klinik</StyledHeading>
      {clinics?.content && clinics.content.length > 0 ? (
        <>
          <ItemsContainer>
            {clinics?.content.map((x) => (
              <ClinicItem key={x.uuid} clinic={x} />
            ))}
          </ItemsContainer>
          <PaginationContainer>
            {Array.from({ length: clinics.totalPages }).map((x, i) => (
              <PaginationItem
                key={i}
                onPageChanged={onPageChanged}
                number={i + 1}
              />
            ))}
          </PaginationContainer>
        </>
      ) : (
        <h2>Brak klinik</h2>
      )}
    </ClinicsContainer>
  );
};
