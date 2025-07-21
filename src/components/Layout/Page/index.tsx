import type { PropsWithChildren } from "react";
import styles from "./index.module.css";

const Page = (props: PropsWithChildren<unknown>) => {
  const { children } = props;
  return <div className={styles.container}>{children}</div>;
};

export default Page;
