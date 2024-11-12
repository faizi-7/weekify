import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import styles from "./Layout.module.css";
import Footer from "../../Footer/Footer";

export default function Layout() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Navbar />
        <div className={styles.children}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}
