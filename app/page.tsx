import Image from "next/image";
import styles from "./page.module.css";

import Head from "next/head";
import Contact from "./components/pages/contact/contact";
import About from "./components/pages/about/about";
import HeroPage from "./components/pages/heroPage/heroPage";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta
          name="image"
          property="og:image"
          content="https://blog-yijiudd.vercel.app/person.jpeg"
        ></meta>
      </Head>
      <div className={styles.container}>
        <div className={styles.name}>
          <text>Yi Jiu </text>
        </div>
        <Navbar></Navbar>
        <HeroPage></HeroPage>
        <About></About>
        <Contact></Contact>
      </div>
    </>
  );
}
