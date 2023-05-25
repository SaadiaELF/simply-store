import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@component/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="author" content="Saadia El fekak" />
        <meta name="description" content="Simply Fashion Store"></meta>
        <title>Simply.</title>
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
