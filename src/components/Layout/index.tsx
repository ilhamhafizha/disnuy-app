import { type PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import Page from "./Page";
import { useOutlet } from "react-router-dom";

const Layout = (props: PropsWithChildren<unknown>) => {
  const outlet = useOutlet();

  return (
    <div>
      <Sidebar />
      <Page>{outlet}</Page>
    </div>
  );
};
export default Layout;
