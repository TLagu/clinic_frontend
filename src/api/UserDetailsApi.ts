import { DictionaryItems } from "components/common/DictionaryItems";
import { authorizedApi } from "hooks/withAxiosIntercepted";
import { UserDto } from "models/api/company/UserDto";

export class UserDetailsApi {
  static getUser = async (username: string) =>
    await authorizedApi.get<UserDto>("/user/user", {
      params: {
        username: username,
      },
    });

  static getDictionaryPatients = async () =>
    await authorizedApi.get<DictionaryItems>("/user/getDictionaryPatients");

  static getDictionaryDoctors = async () =>
    await authorizedApi.get<DictionaryItems>("/user/getDictionaryDoctors");
}
