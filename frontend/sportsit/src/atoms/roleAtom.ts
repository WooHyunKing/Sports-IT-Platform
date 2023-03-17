import { atom } from "recoil";
import { IRole, RoleAtomType } from "../interfaces/roleInterface";

export const roleAtom = atom<RoleAtomType>({
  key: "role",
  default: "ROLE_USER",
});
