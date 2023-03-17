import { atom } from "recoil";
import { IRole } from "../interfaces/roleInterface";

export const roleAtom = atom<IRole>({
  key: "role",
  default: {
    role: "ROLE_USER",
  },
});
