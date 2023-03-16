import axios from "axios";
import { baseApi } from "../utils/instance";

const ID_CHECK_URI = "auth/checkId";
const SIGNUP_URI = "signup";
const LOGIN_URI = "auth/login";

interface ILoginForm {
  nickname: string;
  email: string;
  phoneNum: string;
  pw: string;
  memberType: string; // "ROLE_USER", "ROLE_"
}

export const loginPost = () => {
  baseApi.post(LOGIN_URI, {});
};

// export async function loginPost() {
//   return await axios.post("").then((res) => console.log(res));
// }
