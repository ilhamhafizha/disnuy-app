import ContentCard from "../../components/ContentCard";
import styles from "./index.module.css";

const Search = () => {
  return (
    <div>
      <div className={styles.searchBar}>
        <span style={{ color: "white" }} className="material-symbols-outlined">
          Search
        </span>
        <input type="text" placeholder="Movies, shows and more" />
      </div>

      <div className={styles.contentGrid}>
        {Array(12)
          .fill(0)
          .map((_) => (
            <ContentCard
              title="Mickey Mouse"
              description="Mickey Mouse is an animated cartoon character co-created in 1928 by Walt Disney and Ub Iwerks."
              posterImage="https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
              bannerImage="https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
              onClick={() => console.log("Content Card Clicked")}
            />
          ))}
      </div>
    </div>
  );
};

export default Search;
