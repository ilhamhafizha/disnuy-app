import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ContentCard from "../../components/ContentCard";
import ImageBanner from "../../components/ImageBanner";
import ScrollableSection from "../../components/ScrollableSection";
import SectionItems from "../../components/ScrollableSection/SectionItems";

const Movies = () => {
  return (
    <div>
      <ImageBanner />
      <BannerDetail />
      <BannerMask>
        <ScrollableSection title="Popular Movies on Disney+">
          {Array(12)
            .fill(0)
            .map((_) => (
              <SectionItems>
                <ContentCard
                  title="Mickey Mouse"
                  description="Mickey Mouse is an animated cartoon character co-created in 1928 by Walt Disney and Ub Iwerks."
                  posterImage="https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
                  bannerImage="https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
                  onClick={() => console.log("Content Card Clicked")}
                />
              </SectionItems>
            ))}
        </ScrollableSection>
      </BannerMask>
    </div>
  );
};

export default Movies;
