import type { PropsWithChildren } from "react";
import styles from "./index.module.css";
import Sidebar from "./Sidebar";
import Page from "./Page";

const Layout = (props: PropsWithChildren<unknown>) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Sidebar />
      <Page>{children}</Page>
    </div>
  );
};
export default Layout;
