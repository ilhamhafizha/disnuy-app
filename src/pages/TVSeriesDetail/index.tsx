import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import EpisodeItem from "./EpisodeItem";

import styles from "./index.module.css";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../components/constain";

const TVSeriesDetail = () => {
  const { id } = useParams();
  const [activeSeason, setActiveSeason] = useState<number | null>(null);

  // Fetch general TV series data
  const { data } = useFetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`);

  // Set initial season number when data is fetched
  useEffect(() => {
    if (data?.seasons && data.seasons.length > 0 && activeSeason === null) {
      setActiveSeason(data.seasons[0].season_number); // Usually 1
    }
  }, [data, activeSeason]);

  // Build season URL only if activeSeason is not null
  const seasonUrl =
    activeSeason !== null
      ? `https://api.themoviedb.org/3/tv/${id}/season/${activeSeason}?api_key=${API_KEY}`
      : "";

  // Fetch season data
  const { data: seasonData } = useFetch(seasonUrl);

  return (
    <div>
      {activeSeason !== null && (
        <>
          <ImageBanner
            alt={data?.name}
            src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          />

          <BannerDetail
            title={data?.name}
            overview={data?.overview}
            releaseDate={data?.first_air_date}
            genres={data?.genres?.map((genre: any) => ({
              id: genre.id,
              name: genre.name,
            }))}
            language={data?.original_language}
          />

          <BannerMask>
            <h1 className={styles.seasonTitle}>Seasons</h1>

            <div className={styles.tabsSection}>
              {data?.seasons?.map((seasonItem: any) => (
                <span
                  key={seasonItem.id}
                  data-active={seasonItem.season_number === activeSeason}
                  onClick={() => setActiveSeason(seasonItem.season_number)}
                >
                  {seasonItem.name}
                </span>
              ))}
            </div>

            <div>
              {seasonData?.episodes?.map((episode: any) => (
                <EpisodeItem
                  key={episode.id}
                  imageUrl={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
                  title={episode.name}
                  season={episode.season_number}
                  episode={episode.episode_number}
                  duration={(episode.runtime ?? 0) + "m"}
                  date={episode.air_date}
                  desc={episode.overview}
                />
              ))}
            </div>
          </BannerMask>
        </>
      )}
    </div>
  );
};

export default TVSeriesDetail;
