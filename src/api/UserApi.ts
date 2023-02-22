import axios from "axios";
import { authorizedApi } from "hooks/withAxiosIntercepted";
import { UserDto } from "models/api/company/UserDto";
import { UserResponse } from "models/api/UserResponse";

export class UserApi {
  static getUser = async () =>
    await authorizedApi.get<UserResponse>("/user/getUser");

  static updateUser = async (request: UserDto) =>
    await axios.put("/user/user", request);
}
