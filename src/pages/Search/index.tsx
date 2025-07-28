import { type ChangeEvent, useState } from "react";
import ContentCard from "../../components/ContentCard";
import styles from "./index.module.css";
import useFetch from "../../hooks/useFetch";
import useDebounce from "../../hooks/useDebounce";
import { API_KEY } from "../../components/constain";

const Search = () => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);

  const { data: movieData, loading: movieLoading } = useFetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearch}`
  );
  const { data: tvData, loading: tvLoading } = useFetch(
    `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${debouncedSearch}`
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <span className="material-symbols-outlined">search</span>
        <input
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Movies, shows and more"
        />
      </div>

      {movieLoading || tvLoading ? (
        <div>
          <h1
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Loading...
          </h1>
        </div>
      ) : (
        <>
          <h1
            style={{
              color: "white",
            }}
          >
            Movies
          </h1>
          <div className={styles.contentGrid}>
            {movieData?.results &&
              movieData.results.map((movieItem: any) => (
                <ContentCard
                  key={movieItem.id}
                  title={movieItem.title}
                  description={movieItem.overview}
                  posterImage={`https://image.tmdb.org/t/p/w342/${movieItem.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w342/${movieItem.backdrop_path}`}
                />
              ))}
          </div>
          <h1
            style={{
              color: "white",
            }}
          >
            TV Series
          </h1>
          <div className={styles.contentGrid}>
            {tvData?.results &&
              tvData.results.length > 0 &&
              tvData.results.map((tvItem: any) => (
                <ContentCard
                  title={tvItem.name}
                  description={tvItem.overview}
                  posterImage={`https://image.tmdb.org/t/p/w342/${tvItem.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w342/${tvItem.backdrop_path}`}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
