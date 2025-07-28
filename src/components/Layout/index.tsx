import Sidebar from "./Sidebar";
import Page from "./Page";
import { useOutlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAuthState from "../../hooks/useAuthState";

const Layout = () => {
  const outlet = useOutlet();
  const user = useAuthState();
  const { logout } = useAuth();
  const handleLogout = () => {
    console.log("CLICKED");

    logout();
  };

  return (
    <div>
      <Sidebar user={user} onLogout={handleLogout} />
      <Page>{outlet}</Page>
    </div>
  );
};

export default Layout;
