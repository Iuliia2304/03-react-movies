import axios from "axios";
import type { Movie } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_TMDB_TOKEN;

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(`${BASE_URL}/search/movie`, {
    params: {
      query,
      language: "en-US",
      include_adult: false,
    },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  console.log("API response:", response.data);
  return response.data.results;
};


