import styles from "./index.module.css";

interface Props {
  title: string;
  description: string;
  posterImage: string;
  bannerImage: string;
  onClick?: () => void;
}

const ContentCard = (props: Props) => {
  const { title, description, posterImage, bannerImage, onClick } = props;

  return (
    <div className={styles.container} onClick={onClick}>
      <div className={styles.content}>
        <div className={styles.poster}>
          <img src={posterImage} width="100%" />
        </div>
      </div>

      <div className={styles.detail}>
        <div className={styles.bannerWrapper}>
          <img src={bannerImage} alt="" width="100%" />
        </div>
        <div className={styles.detailWrapper}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
