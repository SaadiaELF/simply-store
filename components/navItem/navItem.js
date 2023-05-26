import Link from "next/link";
import styles from "./navItem.module.css";

export default function NavItem({ href, name }) {
  return <Link className={styles.link} href={href}>{name}</Link>;
}
