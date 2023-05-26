import NavItem from "../navItem/navItem";
import styles from "./nav.module.css";

export default function Nav() {
  const navItems = [{ name: "Home", href: "/" }];

  return (
    <nav className={styles.nav}>
      {navItems.map((item, i) => {
        return <NavItem key={i} href={item.href} name={item.name} />;
      })}
    </nav>
  );
}
