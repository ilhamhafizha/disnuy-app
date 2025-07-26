import { API_KEY } from "../components/constain";
import useFetch from "./useFetch";

const useGenres = () => {
  const { data: dataMovieGenre, loading: loadingMovieGenre } = useFetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  );

  const { data: dataTvGenre, loading: loadingTvGenre } = useFetch(
    `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_KEY}`
  );

  return {
    loading: loadingMovieGenre || loadingTvGenre,
    genres: [...(dataMovieGenre?.genres || []), ...(dataTvGenre?.genres || [])],
  };
};

export default useGenres;
