import style from "./index.module.css";
import BannerDetail from "../../components/BannerDetail";
import BannerMask from "../../components/BannerMask";
import ImageBanner from "../../components/ImageBanner";
import EpidodeItem from "./EpisodeItem";

const TVSeriesDetail = () => {
  return (
    <div>
      <ImageBanner />
      <BannerDetail />
      <BannerMask>
        <h1 className={style.seasonTitle}>Seasons</h1>
        <div className={style.tabsSection}>
          <span data-active="true">Season 1</span>
          <span>Season 2</span>
          <span>Season 3</span>
          <span>Season 4</span>
          <span>Season 5</span>
        </div>
        <div>
          {/* Episode */}
          <div>
            {/* {Episode Item} */}
            <EpidodeItem
              imageUrl=""
              title="Mickey Mouse Clubhouse"
              season={1}
              episode={1}
              duration="32"
              date="01-01-2025"
              desc="Mickey Mouse is an animated cartoon character co-created in 1928 by Walt"
            />
            <EpidodeItem
              imageUrl=""
              title="Mickey Mouse Clubhouse"
              season={1}
              episode={1}
              duration="32"
              date="01-01-2025"
              desc="Mickey Mouse is an animated cartoon character co-created in 1928 by Walt"
            />
          </div>
        </div>
      </BannerMask>
    </div>
  );
};

export default TVSeriesDetail;
