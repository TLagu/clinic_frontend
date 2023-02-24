import { UserDto } from "models/api/company/UserDto";
import {
  DataContainer,
  ImportantInfo,
  ItemContainer,
  LeftSide,
  RightSide,
} from "./UserItemStyle";

type UserItemProps = {
  user: UserDto;
};

export const UserItem = ({ user }: UserItemProps) => {
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

  // function createLineFromArray(left: string, right: string[]) {
  //   return (
  //     <DataContainer>
  //       <LeftSide>
  //         <span>{left}</span>
  //       </LeftSide>
  //       <RightSide>
  //         <span>
  //           {right.map((s) => (
  //             <span key={s}>
  //               {s}
  //               <br />
  //             </span>
  //           ))}
  //         </span>
  //       </RightSide>
  //     </DataContainer>
  //   );
  // }

  function concatString(table: string[]) {
    return table.join(" ").trim();
  }

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
    </ItemContainer>
  );
};
