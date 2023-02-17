import { PhoneTypeDto } from "./PhoneTypeDto";

export type ClinicPhoneDto = {
  id: number;
  phoneType: PhoneTypeDto;
  phone: string;
  primary: boolean;
};
