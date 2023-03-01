import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import styles from './Root.module.css'

function RootLayout() {
  return (
    <>
      <Header />
      <main className={styles.background}>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
