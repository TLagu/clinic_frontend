import axios from "axios";
import { authorizedApi } from "hooks/withAxiosIntercepted";
import { UserDto } from "models/api/company/UserDto";
import { PageableResponse } from "models/api/PageableResponse";
import { UserResponse } from "models/api/UserResponse";

export class UserApi {
  static getAllUsers = async (pageNumber: number) =>
    await authorizedApi.get<PageableResponse<UserDto>>("/user/getAllUsers", {
      params: {
        page: pageNumber,
      },
    });

  static deleteUser = (uuid: any) => {
    return authorizedApi.delete<UserDto>(`/user/delete/${uuid}`);
  };

  static getUser = async () =>
    await authorizedApi.get<UserResponse>("/user/getUser");

  static updateUser = async (request: UserDto) =>
    await axios.put("/user/user", request);
}
