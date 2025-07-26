import clsx from "clsx";
import styles from "./index.module.css";

interface GenreItem {
  id: string;
  name: string;
}

interface Props {
  title: string;
  overview: string;
  realeseDate: string;
  genres: GenreItem[];
  lenguage: string;
}

const BannerDetail = (props: Props) => {
  const { title, overview, realeseDate, genres = [], lenguage } = props;

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <h1 className={styles.title}>{title}</h1>
        <div className={clsx(styles.section, styles.section1)}>
          <span>{realeseDate}</span>
          <i>&#x2022;</i>
          <span>{lenguage}</span>
        </div>

        <div className={clsx(styles.section, styles.section2)}>
          <p>{overview}</p>
        </div>

        <div className={clsx(styles.section, styles.section3)}>
          {genres.map(({ id, name }, index) => (
            <>
              {index > 0 && <span>&#124;</span>}
              <b key={id}>{name}</b>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BannerDetail;
