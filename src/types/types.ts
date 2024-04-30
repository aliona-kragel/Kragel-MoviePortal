import { Dispatch, SetStateAction } from "react";

export type ResponceListType = {
  total: number,
  totalPages: number,
  items: MovieListType[]
}
export type MovieListType = {
  kinopoiskId: 1201206,
  imdbId: string | null,
  nameRu: string | null,
  nameEn: string | null,
  nameOriginal: string,
  countries: [
    {
      country: string
    }
  ],
  genres: [
    {
      genre: string
    },
    {
      genre: string
    }
  ],
  ratingKinopoisk: 9.4,
  ratingImdb: number | null,
  year: number,
  type: string,
  posterUrl: string,
  posterUrlPreview: string
}
export type MovieDetailsTypes = {
  kinopoiskId: number,
  kinopoiskHDId: number | null,
  imdbId: string,
  nameRu: string,
  nameEn: number | null,
  nameOriginal: string,
  posterUrl: string,
  posterUrlPreview: string,
  coverUrl: null,
  logoUrl: null,
  reviewsCount: number,
  ratingGoodReview: number,
  ratingGoodReviewVoteCount: number,
  ratingKinopoisk: number,
  ratingKinopoiskVoteCount: number,
  ratingImdb: number,
  ratingImdbVoteCount: number,
  ratingFilmCritics: number | null,
  ratingFilmCriticsVoteCount: number,
  ratingAwait: number | null,
  ratingAwaitCount: number,
  ratingRfCritics: number | null,
  ratingRfCriticsVoteCount: number,
  webUrl: string,
  year: number,
  filmLength: number,
  slogan: string | null,
  description: string | null,
  shortDescription: string | null,
  editorAnnotation: string | null,
  isTicketsAvailable: boolean,
  productionStatus: string | null,
  type: string,
  ratingMpaa: string | null,
  ratingAgeLimits: string,
  countries: [
    {
      country: string
    }
  ],
  genres: [
    {
      genre: string
    },
    {
      genre: string
    }
  ],
  startYear: number | null,
  endYear: number | null,
  serial: boolean,
  shortFilm: boolean,
  completed: boolean,
  hasImax: boolean,
  has3D: boolean,
  lastSync: string
}
export type MovieStaffTypes = {
  staffId: number,
  nameRu: string,
  nameEn: string,
  description: string,
  posterUrl: string,
  professionText: string,
  professionKey: string
}
export type GetMovieDetailsParams = {
  selectedMovieID: number | null
}
export type GetMoviesParams = {
  type?: string,
  searchString?: string,
  page: number
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
export type MovieInfoProps = {
  detailsData: MovieDetailsTypes,
}
export type MovieListProps = {
  searchString: string,
  type: string,
  page: number,
}
export type SearchFieldProps = {
  searchString: string,
  setSearchString: Dispatch<SetStateAction<string>>
}
export type PaginationProps = {
  totalPages: number,
  currentPage: number,
  onPageChange: (page: number) => void,
}
export type RatingProps = {
  value: number;
  rating: number;
  count: number;
}
export type CommonSliceTypes = {
  userData: {
    email: string,
    password: string
  },
}
export type MovieSliceTypes = {
  selectedMovieID: number | null,
  movieList: ResponceListType | undefined,
  isDataLoading: boolean,
  selectedMovieTag: string
}
export type UserDataTypes = {
  email: string;
  password: string;
}
export type LoginDataTypes = {
  email: string,
  password: string,
}
export type FavMovieData = {
  id: number | null,
  name: string,
  poster: string,
  rating: number,
  desc: string | null
}
export type LikedMovie = {
  data: FavMovieData
}
export type ThemeContextType = {
  theme: string,
  toggleTheme: () => void
}