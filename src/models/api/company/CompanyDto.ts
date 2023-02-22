import { CompanyEmailDto } from "./CompanyEmailDto";
import { CompanyPhoneDto } from "./CompanyPhoneDto";

export type CompanyDto = {
  uuid: string;
  fullName: string;
  shortName: string;
  nip: string;
  regon: string;
  krs: string;
  accountNumber: string;
  province: string;
  district: string;
  community: string;
  locality: string;
  street: string;
  streetNo: string;
  flatNo: string;
  postCode: string;
  post: string;
  description: string;
  emails: CompanyEmailDto[];
  phones: CompanyPhoneDto[];
};
