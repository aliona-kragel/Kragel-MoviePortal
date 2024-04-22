import { Dispatch, SetStateAction } from "react";

export type MovieListType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}
export type ResponceListType = {
  Response: string;
  Search: MovieListType[]
  totalResults: string;
}
export type GetMoviesParams = {
  page: number;
  limit: number;
}
export type DefaultModalProps = {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>,
}
export type LinkItemProps = {
  to: string;
}
export type MovieCardPrors = {
  data: MovieListType
}
export type PaginationProps = {
  totalPages: number,
  currentPage: number,
  onPageChange: (page: number) => void,
}
export type LoginDataTypes = {
  email: string;
  password: string;
}
export type CommonTypes = {
  userData: {
    email: string,
    password: string
  },
  isLoggedIn: boolean | null;
}

export type UserDataTypes = {
  email: string;
  password: string;
}