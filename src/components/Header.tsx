import * as React from "react";
import { Link } from "gatsby";
import logo from "../assets/logo-white.svg";
import { navItems } from "../content/site";
import ApplyButton from "./ApplyButton";
import * as styles from "./Header.module.css";

// showNav is false on pages that do not contain the anchored sections (404).
const Header = ({ showNav = true }: { showNav?: boolean }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/" onClick={closeMenu}>
        <img src={logo} alt="Mercury University" width={239} height={54} />
      </Link>
      {showNav && (
        <>
          <button
            className={styles.menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
            <span className={styles.srOnly}>Menu</span>
          </button>
          <nav
            id="site-nav"
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            aria-label="Sections"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                className={styles.navLink}
                href={`#${item.id}`}
                onClick={closeMenu}
              >
                {item.title}
              </a>
            ))}
            <ApplyButton onClick={closeMenu} />
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
