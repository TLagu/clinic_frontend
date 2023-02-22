import { CompanyItems } from "components/common/CompanyItems";
import { authorizedApi } from "hooks/withAxiosIntercepted";
import { CompanyDto } from "models/api/company/CompanyDto";
import { PageableResponse } from "models/api/PageableResponse";

export class CompanyApi {
  static getAllCompanies = async (pageNumber: number) =>
    await authorizedApi.get<PageableResponse<CompanyDto>>(
      "/info/getAllCompanies",
      {
        params: {
          page: pageNumber,
        },
      }
    );
  static getDictionaryCompany = async () =>
    await authorizedApi.get<CompanyItems>("/info/getDictionaryCompany");
}
