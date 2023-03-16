import { atom } from "recoil";

// export enum Roles{
//   ""
// }

export const roleAtom = atom<boolean>({
  key: "role",
  default: true,
});
