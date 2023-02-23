import { authorizedApi } from "hooks/withAxiosIntercepted";
import { CompanyDto } from "models/api/company/CompanyDto";
import { PageableResponse } from "models/api/PageableResponse";

export class CompanyApi {
  static getCompanyData = async (pageNumber: number) =>
    await authorizedApi.get<PageableResponse<CompanyDto>>("/info/getCompany", {
      params: {
        page: pageNumber,
      },
    });
}
