import { AppointmentDto, ScheduleItems } from "models/api/company/ScheduleDto";
import { authorizedApi } from "hooks/withAxiosIntercepted";

export class ScheduleApi {
  static getscheduleByDay = async (date: string, userUuid: string) =>
    await authorizedApi.get<ScheduleItems>("/schedule/getScheduleByDay", {
      params: {
        date: date,
        userUuid: userUuid,
      },
    });

  static getAppointmentByUuid = async (uuid: string) =>
    await authorizedApi.get<AppointmentDto>("/schedule/getAppointmentByUuid", {
      params: { uuid: uuid },
    });

  static updateSchedule = async (request: AppointmentDto) =>
    await authorizedApi.put("/schedule/doctorSchedule", request);

  static addPatientSchedule = async (request: AppointmentDto) =>
    await authorizedApi.post("/schedule/addPatientSchedule", request);
}
