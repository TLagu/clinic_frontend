import { authorizedApi } from "hooks/withAxiosIntercepted";
import { PageableResponse } from "models/api/PageableResponse";
import { ClinicsDto } from "models/api/company/ClinicsDto";

export class ClinicsApi {
  static getAllClinics = async (pageNumber: number) =>
    await authorizedApi.get<PageableResponse<ClinicsDto>>(
      "/product/getAllClinics",
      {
        params: {
          page: pageNumber,
        },
      }
    );
}
