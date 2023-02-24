import { UserApi } from "api/UserApi";
import { PrimaryButton } from "components/global.styles";
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
  Loader,
  PaginationContainer,
  StyledHeading,
  UserManagementContainer,
} from "./Admin.style";
import { useNavigate } from "react-router-dom";

export const Admin = () => {
  const [users, setUsers] = useState<PageableResponse<UserDto> | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await UserApi.getAllUsers(pageNumber);
      setUsers(result.data);
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

  // const onDeleteClicked = () => {
  //   navigate("/admin_delete");
  // };

  // const onModifyClicked = () => {
  //   navigate("/admin_modify");
  // };

  // const listUsers = () => {
  //     users?.content && users.content.length > 0 ? (
  //       <>
  //         <ItemsContainer>
  //           {users?.content.map((x) => (
  //             <UserItem key={x.uuid} user={x} />
  //           ))}
  //         </ItemsContainer>
  //         <PaginationContainer>
  //           {Array.from({ length: users.totalPages }).map((x, i) => (
  //             <PaginationItem
  //               key={i}
  //               onPageChanged={onPageChanged}
  //               number={i + 1}
  //             />
  //           ))}
  //         </PaginationContainer>
  //       </>
  //     ) : (
  //       <h2>Brak użytkowników do wyświetlenia</h2>
  //     );
  // };

  return (
    <AdminContainer>
      <StyledHeading>Panel administracyjny</StyledHeading>
      <UserManagementContainer>
        <ButtonPanelTitle> Zarządzanie użytkownikami:</ButtonPanelTitle>
        <ButtonPanel>
          {/* <PrimaryButton onClick={listUsers}>Wyświetl użytkowników</PrimaryButton>
          <PrimaryButton onClick={onModifyClicked}>Modyfikuj użytkownika</PrimaryButton>
          <PrimaryButton onClick={onDeleteClicked}>Usuń użytkownika</PrimaryButton> */}
          <PrimaryButton>Wyświetl istniejących użytkowników</PrimaryButton>
          <PrimaryButton>Modyfikuj użytkownika</PrimaryButton>
          <PrimaryButton>Usuń użytkownika z bazy</PrimaryButton>
        </ButtonPanel>
        <DisplayContainer>
          <ButtonPanelTitle>Aktualna lista użytkowników:</ButtonPanelTitle>
          {users?.content && users.content.length > 0 ? (
            <>
              <ItemsContainer>
                {users?.content.map((x) => (
                  <UserItem key={x.uuid} user={x} />
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
          ;
        </DisplayContainer>
      </UserManagementContainer>
    </AdminContainer>
  );
};
