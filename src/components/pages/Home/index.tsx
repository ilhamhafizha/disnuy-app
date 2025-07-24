import BannerDetail from "../../BannerDetail";
import BannerMask from "../../BannerMask";
import ContentCard from "../../ContentCard";
import ImageBanner from "../../ImageBanner";
import ScrollableSection from "../../ScrollableSection";
import SectionItems from "../../ScrollableSection/SectionItems";

const Home = () => {
  return (
    <div>
      <ImageBanner />
      <BannerDetail />
      <BannerMask>
        <ScrollableSection title="Popular on Disney+">
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

export default Home;
