
const API_KEY = `dbf6ad83e201e98cbf498fbcfd80bf8a`;
const LANGUAGE = "ko-KO";
const REGION = "KR";
const BASE_PATH = "https://api.themoviedb.org/3";
const TAIL_PATH = `api_key=${API_KEY}&language=${LANGUAGE}&region=${REGION}`;

export const LIST_TYPE = [
  "nowPlaying",
  "upcomingMovies",
  "popularMovies",
  "tvShow",
]

interface IData {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  name?: string; // 제목
  release_date: string;
  vote_average: number;
}
interface Genre {
  id: number;
  name: string;
}

export interface IMovieDetail extends IData {
  budget: number;
  homepage: string;
  genres: Genre[];
  imdb_id: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
}
export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IData[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}


// Movies - NowPlaying
export function getNowPlayingMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?${TAIL_PATH}`).then((response) =>
    response.json()
  );
}

// Movies - Popular
export function getPopularMovies() {
  return fetch(`${BASE_PATH}/movie/popular?${TAIL_PATH}`).then((response) =>
    response.json()
  );
}

// Movies - Upcoming
export function getUpcomingMovies() {
  return fetch(`${BASE_PATH}/movie/upcoming?${TAIL_PATH}`).then((response) =>
    response.json()
  );
}

// TvShows
export function getPopularTvShows() {
  return fetch(`${BASE_PATH}/tv/popular?${TAIL_PATH}`).then((response) =>
    response.json()
  );
}

// Modal Popup getDetail Info Api
export function getDetailData(requestUrl: string, movieId: number) {
  return fetch(`${BASE_PATH}/${requestUrl}/${movieId}?${TAIL_PATH}`).then(
    (response) => response.json()
  );
}


export interface IGenre {
  id: number;
  name: string;
}
interface INetworks {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}
export interface IDetailInfo {
  id: number;
  overview: string;
  title?: string;
  original_title?: string;
  name?: string;
  vote_average: number;
  runtime: number;
  backdrop_path: string;
  poster_path: string;
  genres: IGenre[];
  release_date?: string;
  first_air_date?: string;
  networks: INetworks[];
  tagline?: string;
}

export interface IGetSearchResult {
  page: number;
  results: ISearch[]; // 영화 데이터 interface의 []
  total_pages: number;
  total_results: number;
}
interface ISearch {
  id: number;
  overview: string;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  media_type: string;
}
export function searchData(keyword: string) {
  return fetch(`${BASE_PATH}/search/multi?api_key=${API_KEY}&query=${keyword}`)
    .then((response) => response.json())
    .catch((err) => err);
}