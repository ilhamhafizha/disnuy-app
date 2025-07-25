import { useNavigate } from "react-router-dom";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ContentCard from "../../components/ContentCard";
import ImageBanner from "../../components/ImageBanner";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItems from "../../components/ScrollableSection/SectionItems";
import useFetch from "../../hooks/useFetch";

const API_KEY = "daa4facba2ec52182b9118a5db98644a";

const Home = () => {
  const navigate = useNavigate();

  const { loading, data } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  console.log({
    loading,
    data,
  });

  return (
    <div>
      <ImageBanner />
      <BannerDetail />
      <BannerMask>
        <ScrollableSection title="Popular on Disney+">
          {!loading &&
            data &&
            data.results.map((content) => (
              <SectionItems>
                <ContentCard
                  onClick={() => navigate("/movie/bla")}
                  title={content.title}
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

export default Home;
