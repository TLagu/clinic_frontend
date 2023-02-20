import axios from "axios";
import { SignInRequest } from "models/api/SignInRequest";
import { SignInResponse } from "models/api/SignInResponse";
import { SignUpRequest } from "models/api/SignUpRequest";
import { SignUpResponse } from "models/api/SignUpResponse";

export class AuthApi {
  static signIn = async (request: SignInRequest) =>
    await axios.post<SignInResponse>("/auth/signin", request);

  static signUp = async (request: SignUpRequest) =>
    await axios.post<SignUpResponse>("/auth/signup", request);
}
