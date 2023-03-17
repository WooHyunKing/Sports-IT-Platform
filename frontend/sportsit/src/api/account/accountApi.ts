import axios from "axios";
import { ILoginProps, ISignupProps } from "../../interfaces/accountInterface";
import { baseApi } from "../utils/instance";

// const ID_CHECK_URI = "auth/checkId";
const SIGNUP_URI = "signup";
const LOGIN_URI = "authenticate";

export const signupPost = (signupProps: ISignupProps) =>
  baseApi.post(SIGNUP_URI, {
    loginId: signupProps.loginId,
    pw: signupProps.pw,
    name: signupProps.name,
    memberType: signupProps.memberType,
    email: signupProps.email,
    phone: signupProps.phone,
    activated: signupProps.activated,
  });

export const loginPost = (loginProps: ILoginProps) =>
  baseApi.post(LOGIN_URI, {
    loginId: loginProps.loginId,
    pw: loginProps.pw,
  });

// export async function loginPost() {
//   return await axios.post("").then((res) => console.log(res));
// }
