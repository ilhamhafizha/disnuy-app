import { useNavigate } from "react-router-dom";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ContentCard from "../../components/ContentCard";
import ImageBanner from "../../components/ImageBanner";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItems from "../../components/ScrollableSection/SectionItems";
import useFetch from "../../hooks/useFetch";
import { API_KEY } from "../../components/constain";
import useGenres from "../../hooks/useGenres";
import useMapGenreIdtoName from "../../hooks/useMapGenreIdToName";

const TVSeries = () => {
  const navigate = useNavigate();

  const { loading, data } = useFetch(`https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}`);

  const { genres } = useGenres();

  const firstContent = data?.results?.[0] || {};
  const genreNames = useMapGenreIdtoName(firstContent.genre_ids, genres);

  return (
    <div>
      <ImageBanner
        alt={firstContent.title || firstContent.name}
        src={`https://image.tmdb.org/t/p/original/${firstContent.backdrop_path}`}
      />
      <BannerDetail
        title={firstContent.name}
        overview={firstContent.overview}
        releaseDate={firstContent.first_air_date}
        genres={genreNames}
        language={firstContent.original_language}
      />
      <BannerMask>
        <ScrollableSection title="TV Series Popular on Disney+">
          {!loading &&
            data &&
            data.results.map((content: any) => (
              <SectionItems key={content.id}>
                <ContentCard
                  onClick={() => navigate(`/tv/${content.id}`)}
                  title={content.name}
                  description={content.overview}
                  posterImage={`https://image.tmdb.org/t/p/w500/${content.poster_path}`}
                  bannerImage={`https://image.tmdb.org/t/p/w500/${content.backdrop_path}`}
                />
              </SectionItems>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  );
};

export default TVSeries;
