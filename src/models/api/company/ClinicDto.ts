import { ClinicEmailDto } from "./ClinicEmailDto";
import { ClinicPhoneDto } from "./ClinicPhoneDto";

export type ClinicDto = {
  uuid: string;
  company: string;
  province: string;
  district: string;
  community: string;
  locality: string;
  street: string;
  streetNo: string;
  flatNo: string;
  postCode: string;
  post: string;
  clinicName: string;
  description: string;
  emails: ClinicEmailDto[];
  phones: ClinicPhoneDto[];
};
