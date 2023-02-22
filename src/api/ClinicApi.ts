import { authorizedApi } from "hooks/withAxiosIntercepted";
import { PageableResponse } from "models/api/PageableResponse";
import { ClinicDto } from "models/api/company/ClinicDto";
import { ClinicItems } from "components/common/ClinicItems";

export class ClinicApi {
  static getAllClinics = async (pageNumber: number) =>
    await authorizedApi.get<PageableResponse<ClinicDto>>(
      "/info/getAllClinics",
      {
        params: {
          page: pageNumber,
        },
      }
    );
  static getDictionaryClinic = async () =>
    await authorizedApi.get<ClinicItems>("/info/getDictionaryClinic");
}
