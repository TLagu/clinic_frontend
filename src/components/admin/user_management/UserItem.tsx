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
import { useState } from "react";

type UserItemProps = {
  user: UserDto;
  updateRefresh: (lastRefresh: Date) => void;
};

export const UserItem = (props: UserItemProps) => {
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
    UserApi.deleteUser(uuid);
    toast.success(`Użytkownik został pomyślnie usunięty z bazy.`, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    props.updateRefresh(new Date(Date.now()));
  }

  return (
    <ItemContainer>
      <ImportantInfo>
        Użytkownik{" "}
        {concatString([
          props.user.userAppDetails.firstName,
          props.user.userAppDetails.lastName,
        ])}
      </ImportantInfo>
      <>{createLine("Email", props.user.email)}</>
      <>
        {createLine(
          "Second name",
          props.user.userAppDetails.secondName as string
        )}
      </>
      <>{createLine("NIP", props.user.userAppDetails.nip as string)}</>
      <>{createLine("PESEL", props.user.userAppDetails.pesel)}</>
      <>
        {createLine(
          "Dowód osobisty",
          props.user.userAppDetails.idNumber as string
        )}
      </>
      {/* <>{createLine("Klinika", user.clinic)}</> */}
      {/* <>{createLineFromArray("Roles", user.roles.map((e) => e.))}</>  */}
      <AdminButtonPanel>
        <AdminButton>Zmodyfikuj dane użytkownika</AdminButton>
        <AdminButton onClick={() => deleteUser(props.user.uuid)}>
          Usuń użytkownika{" "}
          {concatString([
            props.user.userAppDetails.firstName,
            props.user.userAppDetails.lastName,
          ])}
        </AdminButton>
      </AdminButtonPanel>
    </ItemContainer>
  );
};
