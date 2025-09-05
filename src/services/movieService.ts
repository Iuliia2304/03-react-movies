import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const token = import.meta.env.VITE_TMDB_TOKEN;

const options = {
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
};

export const fetchMovies = async (query: string) => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?query=${query}&language=en-US&include_adult=false`,
    options
  );
//   console.log("API response:", response.data);
  return response.data.results;
};


