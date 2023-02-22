export type HarmonogramItemDto = {
  uuid: string;
  userUuid: string;
  startTime: Date;
  endTime: Date;
  appointment?: string;
};

export type HarmonogramItemsDto = {
  content: HarmonogramItemDto[];
  date: Date;
};
