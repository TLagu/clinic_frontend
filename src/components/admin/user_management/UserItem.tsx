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

type UserItemProps = {
  user: UserDto;
  updateRefresh: (lastRefresh: Date) => void;
};

export const UserItem = (props: UserItemProps) => {
  const [refresh, setRefresh] = useState<Date | null>(null);
  // const navigate = useNavigate();

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

  let lastRefresh: Date;
  const handleRefresh = () => {
    props.updateRefresh(lastRefresh);
  };

  function deleteUser(uuid: any) {
    console.log(uuid);
    UserApi.deleteUser(uuid);
    lastRefresh = Date.now() as any;
    handleRefresh();
    // navigate("/admin");
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
          props.user.userAppDetails.firstName,
          props.user.userAppDetails.lastName,
        ])}
      </ImportantInfo>
      <>{createLine("Email", props.user.email)}</>
      <>{createLine("Second name", props.user.userAppDetails.secondName)}</>
      <>{createLine("NIP", props.user.userAppDetails.nip)}</>
      <>{createLine("PESEL", props.user.userAppDetails.pesel)}</>
      <>{createLine("Dowód osobisty", props.user.userAppDetails.idNumber)}</>
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
