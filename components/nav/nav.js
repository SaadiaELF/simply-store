import NavItem from "../navItem/navItem";
import Header from "../header/header";
import styles from "./nav.module.css";

export default function Nav() {
  const navItems = [{ name: "Home", href: "/" }];

  return (
    <nav className={styles.nav}>
      <div className={styles.navWrapper}>
        <Header />
        {navItems.map((item, i) => {
          return <NavItem key={i} href={item.href} name={item.name} />;
        })}
      </div>
    </nav>
  );
}
