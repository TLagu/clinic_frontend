import { PhoneTypeDto } from "./PhoneTypeDto";

export type CompanyPhoneDto = {
  id: number;
  phoneType: PhoneTypeDto;
  phone: string;
  primary: boolean;
};
