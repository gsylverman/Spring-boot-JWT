import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as tools from "../components/utils/tools";

export interface MainLayoutProps {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const notifications = useSelector((state: any) => state.notifications);
  useEffect(() => {
    if (notifications && notifications.error) {
      tools.showToast(tools.ERROR, notifications.message);
    }
    if (notifications && notifications.succes) {
      tools.showToast(tools.SUCCES, "posts loaded successfuly");
    }
  }, [notifications]);
  return (
    <>
      <ToastContainer />
      <div style={{ background: "lightblue" }}>{children}</div>
    </>
  );
};

export default MainLayout;
