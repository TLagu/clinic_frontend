import { UserApi } from "api/UserApi";
import { UserDto } from "models/api/company/UserDto";
import {
  AdminButton,
  AdminButtonPanel,
  DataContainer,
  ImportantInfo,
  ItemContainer,
  LeftSide,
  RightSide,
} from "./UserItemStyle";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PageableResponse } from "models/api/PageableResponse";

type UserItemProps = {
  user: UserDto;
};

export const UserItem = ({ user }: UserItemProps) => {
  const navigate = useNavigate();

  function createLine(left: string, right: string) {
    return (
      <DataContainer>
        <LeftSide>
          <span>{left}</span>
        </LeftSide>
        <RightSide>
          <span>{right}</span>
        </RightSide>
      </DataContainer>
    );
  }

  function concatString(table: string[]) {
    return table.join(" ").trim();
  }

  function deleteUser(uuid: any) {
    console.log(uuid);
    UserApi.deleteUser(uuid);
    navigate("/admin");
    toast.success(`Użytkownik został pomyślnie usunięty z bazy.`, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
  // delete - refetch
  // modify - update instead of create

  return (
    <ItemContainer>
      <ImportantInfo>
        Użytkownik{" "}
        {concatString([
          user.userAppDetails.firstName,
          user.userAppDetails.lastName,
        ])}
      </ImportantInfo>
      <>{createLine("Email", user.email)}</>
      <>{createLine("Second name", user.userAppDetails.secondName)}</>
      <>{createLine("NIP", user.userAppDetails.nip)}</>
      <>{createLine("PESEL", user.userAppDetails.pesel)}</>
      <>{createLine("Dowód osobisty", user.userAppDetails.idNumber)}</>
      {/* <>{createLine("Klinika", user.clinic)}</> */}
      {/* <>{createLineFromArray("Roles", user.roles.map((e) => e.))}</>  */}
      <AdminButtonPanel>
        <AdminButton>Zmodyfikuj dane użytkownika</AdminButton>
        <AdminButton onClick={() => deleteUser(user.uuid)}>
          Usuń użytkownika{" "}
          {concatString([
            user.userAppDetails.firstName,
            user.userAppDetails.lastName,
          ])}
        </AdminButton>
      </AdminButtonPanel>
    </ItemContainer>
  );
};
