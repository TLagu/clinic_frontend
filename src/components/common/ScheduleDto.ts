export type ScheduleItemDto = {
  uuid: string;
  userUuid: string;
  startTime: Date;
  endTime: Date;
  appointment?: string;
};

export type ScheduleItems = {
  items: ScheduleItemDto[];
  date: Date;
};
