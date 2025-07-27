import { useState } from "react";
import ContentCard from "../../components/ContentCard";
import styles from "./index.module.css";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../components/constain";
import useDebounce from "../../hooks/useDebounce";

const Search = () => {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search);

  const { data: movieData, loading: movieLoading } = useFetch(
    search
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearch}`
      : ""
  );
  const { data: tvData, loading: tvLoading } = useFetch(
    search
      ? `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${debouncedSearch}`
      : ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className={styles.searchBar}>
        <span style={{ color: "white" }} className="material-symbols-outlined">
          Search
        </span>
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
      ) : search ? (
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
              movieData.results.length > 0 &&
              movieData.results.map((movieItem) => (
                <ContentCard
                  key={movieItem.id}
                  title={movieItem?.title}
                  description={movieItem.overview}
                  posterImage={`https://image.tmdb.org/t/p/w342/${movieItem.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w342/${movieItem.backdrop_path}`}
                  onClick={() => console.log("Content Card Clicked")}
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
              tvData.results.map((tvItem) => (
                <ContentCard
                  key={tvItem.id}
                  title={tvItem.name}
                  description={tvItem.overview}
                  posterImage={`https://image.tmdb.org/t/p/w342/${tvItem.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w342/${tvItem.backdrop_path}`}
                  onClick={() => console.log("Content Card Clicked")}
                />
              ))}
          </div>
        </>
      ) : (
        <div>
          <h1
            style={{
              color: "white",
              textAlign: "center",
            }}
          >
            Ketik untuk mencari film atau TV series
          </h1>
        </div>
      )}
    </div>
  );
};

export default Search;
