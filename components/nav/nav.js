import NavItem from "../navItem/navItem";
import Header from "../header/header";
import Basket from "../basket/basket";
import styles from "./nav.module.css";

export default function Nav({ selectedProducts, showBasket }) {
  const navItems = [{ name: "Home", href: "/" }];

  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <Header text="Simply." />
        {navItems.map((item, i) => {
          return <NavItem key={i} href={item.href} name={item.name} />;
        })}
        <Basket selectedProducts={selectedProducts} showBasket={showBasket} />
      </div>
    </nav>
  );
}
