import { UserApi } from "api/UserApi";
import { Loader, PrimaryButton, StyledHeading } from "components/global.styles";
import { PaginationItem } from "components/common/store/PaginationItem";
import { UserDto } from "models/api/company/UserDto";
import { PageableResponse } from "models/api/PageableResponse";
import { useCallback, useEffect, useState } from "react";
import { UserItem } from "./user_management/UserItem";
import {
  AdminContainer,
  ButtonPanel,
  ButtonPanelTitle,
  DisplayContainer,
  ItemsContainer,
  PaginationContainer,
  UserManagementContainer,
} from "./Admin.style";

export const Admin = () => {
  const [users, setUsers] = useState<PageableResponse<UserDto> | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [refresh, setRefresh] = useState<Date | null>(null);
  const updateRefresh = (lastRefresh: Date) => {
    setRefresh(lastRefresh);
  };

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await UserApi.getAllUsers(pageNumber);
      setUsers(result.data);
    } finally {
      setIsLoading(false);
    }
  }, [pageNumber, refresh]);

  const onPageChanged = (number: number) => {
    setPageNumber(number - 1);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts, pageNumber, refresh]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AdminContainer>
      <StyledHeading>Panel administracyjny</StyledHeading>
      <UserManagementContainer>
        <ButtonPanelTitle> Zarządzanie użytkownikami:</ButtonPanelTitle>
        <ButtonPanel>
          <PrimaryButton>Wysadź Ziemię</PrimaryButton>
          <PrimaryButton>Użyj rękawicy Thanosa</PrimaryButton>
          <PrimaryButton>Zrób obiad</PrimaryButton>
          <PrimaryButton>Włóż kota do mikrofalówki</PrimaryButton>
        </ButtonPanel>
        <DisplayContainer>
          <ButtonPanelTitle>Aktualna lista użytkowników:</ButtonPanelTitle>
          {users?.content && users.content.length > 0 ? (
            <>
              <ItemsContainer>
                {users?.content.map((x) => (
                  <UserItem updateRefresh={updateRefresh} key={x.uuid} user={x} />
                ))}
              </ItemsContainer>
              <PaginationContainer>
                {Array.from({ length: users.totalPages }).map((x, i) => (
                  <PaginationItem
                    key={i}
                    onPageChanged={onPageChanged}
                    number={i + 1}
                  />
                ))}
              </PaginationContainer>
            </>
          ) : (
            <h2>Brak użytkowników do wyświetlenia</h2>
          )}
        </DisplayContainer>
      </UserManagementContainer>
    </AdminContainer>
  );
};
