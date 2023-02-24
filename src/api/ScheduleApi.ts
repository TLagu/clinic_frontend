import { ScheduleItems } from "models/api/company/ScheduleDto";
import { authorizedApi } from "hooks/withAxiosIntercepted";

export class ScheduleApi {
  static getscheduleByDay = async (date: string, userUuid: string) =>
    await authorizedApi.get<ScheduleItems>("/schedule/getScheduleByDay", {
      params: {
        date: date,
        userUuid: userUuid,
      },
    });
}