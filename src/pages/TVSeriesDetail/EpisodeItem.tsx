import styles from "./EpisodeItem.module.css";

interface Props {
  imageUrl: string;
  title: string;
  season: number;
  episode: number;
  date: string;
  desc: string;
  duration: string;
}

const EpidodeItem = (props: Props) => {
  const { imageUrl, title, season, episode, date, desc, duration } = props;
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt="" />
      </div>
      <div className={styles.detailWrapper}>
        <h3>{title}</h3>
        <p className={styles.episodeSummary}>
          <span>
            S {season} E{episode}
          </span>
          <b>&#x2022;</b>
          <span>{date}</span>
          <b>&#x2022;</b>
          <span>{duration} min</span>
        </p>
        <p className={styles.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default EpidodeItem;
