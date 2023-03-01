import styles from "./Header.module.css";
import castleImg from "./assets/castleMinecraft.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const HomePageData=useSelector(state=>state.home)
  
  if(HomePageData[0]){
    return (
      <header className={styles.header}>
        <h1 className={styles.title}>{HomePageData[0].title}</h1>
        <img src={castleImg} alt="server img" className={styles.img} />
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink className={styles.navItem} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navItem} to="/Servers">
                Servers
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navItem} to="screenshots">
                Screenshots
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.navItem} to="login">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.bottomBorder}></div>
      </header>
    );
  }else{
    return;
  }
  
}
export default Header;
