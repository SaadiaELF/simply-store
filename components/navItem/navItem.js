import Link from "next/link";

export default function NavItem({ href, name }) {
  return <Link href={href}>{name}</Link>;
}
