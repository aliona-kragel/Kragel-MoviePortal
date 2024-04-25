import { MovieStaffTypes } from "../types/types";

export const getStaffNames = (staffData: MovieStaffTypes[] | undefined, professionKey: string, limit = 10) => {
  return staffData
    ?.filter(el => el.professionKey === professionKey && el.nameRu.trim() !== "")
    .map(el => el.nameRu)
    .slice(0, limit);
};