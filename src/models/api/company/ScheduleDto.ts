export type ScheduleDto = {
  uuid: string;
  userUuid: string;
  startTime: Date;
  endTime: Date;
  appointment?: string;
};

export type ScheduleItems = {
  items: ScheduleDto[];
  date: Date;
};
