import styles from "./index.module.css";

interface Props {
  src: string;
  alt: string;
}

const ImageBanner = (props: Props) => {
  return (
    <div className={styles.container}>
      <img height="100%" src={props.src} alt={props.alt} />
    </div>
  );
};

export default ImageBanner;
