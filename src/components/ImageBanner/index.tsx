import styles from "./index.module.css";

const ImageBanner = () => {
  return (
    <div className={styles.container}>
      <img
        height="100%"
        src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7642/1712140907642-i"
        alt="Hotstar Banner"
      />
    </div>
  );
};

export default ImageBanner;
