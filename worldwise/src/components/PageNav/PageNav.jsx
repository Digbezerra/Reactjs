import { NavLink, Link } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "../Logo/Logo";

function PageNav() {
  return (
    <>
      <nav className={styles.nav}>
        <Logo />
        <ul>
          <li>
            <NavLink to="/product">Product</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li>
            <Link to="/login" className={styles.ctaLink}>
              login
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default PageNav;
