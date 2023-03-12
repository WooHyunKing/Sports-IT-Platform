import { atom } from "recoil";

export const roleAtom = atom<boolean>({
  key: "role",
  default: true,
});
