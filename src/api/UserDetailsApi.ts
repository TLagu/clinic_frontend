import { authorizedApi } from "hooks/withAxiosIntercepted";
import { UserDto } from "models/api/company/UserDto";

export class UserDetailsApi {
  static getUser = async (username: string) =>
    await authorizedApi.get<UserDto>("/user/doctor_user", {
      params: {
        username: username,
      },
    });
}
