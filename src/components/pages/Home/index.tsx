import BannerDetail from "../../BannerDetail";
import BannerMask from "../../BannerMask";
import ContentCard from "../../ContentCard";
import ImageBanner from "../../ImageBanner";

const Home = () => {
  return (
    <div>
      <ImageBanner />
      <BannerMask />
      <BannerDetail />

      <div style={{ width: "200px" }}>
        <ContentCard
          title="Mickey Mouse"
          description="Mickey Mouse is an animated cartoon character co-created in 1928 by Walt Disney and Ub Iwerks."
          posterImage="https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
          bannerImage="https://image.tmdb.org/t/p/w342/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
          onClick={() => console.log("Content Card Clicked")}
        />
      </div>
    </div>
  );
};

export default Home;
