import { authorizedApi } from "hooks/withAxiosIntercepted";
import { CompanyDto } from "models/api/company/CompanyDto";

export class CompanyApi {
  static getCompanyData = async () =>
    await authorizedApi.get<CompanyDto>("/info/getCompany");
}
