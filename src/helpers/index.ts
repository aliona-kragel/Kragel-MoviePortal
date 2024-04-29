import { MovieStaffTypes } from "../types/types";

export const getStaffNames = (staffData: MovieStaffTypes[] | undefined, professionKey: string, limit = 10) => {
  return staffData
    ?.filter(el => el.professionKey === professionKey && el.nameRu.trim() !== "")
    .map(el => el.nameRu)
    .slice(0, limit);
};

export const allowedFilterList = [
  {
    key: "ALL",
    name: "все"
  },
  {
    key: "FILM",
    name: "фильмы"
  },
  {
    key: "TV_SHOW",
    name: "шоу"
  },
  {
    key: "TV_SERIES",
    name: "сериалы"
  },
  {
    key: "MINI_SERIES",
    name: "мини-сериалы"
  },
]