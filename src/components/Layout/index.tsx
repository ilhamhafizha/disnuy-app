import type { PropsWithChildren } from "react";
import styles from "./index.module.css";
import Sidebar from "./Sidebar";

const Layout = (props: PropsWithChildren<unknown>) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Sidebar />
      {children}
    </div>
  );
};
export default Layout;
