import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Img1 from "../assets/img-1.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="mainContainer">
        <div className={styles.main}>
          <p className={styles.second}>VERTICARD</p>
          <p className={styles.third}>new bootstrap theme</p>
        </div>
        <div className={styles.box3}>
          <div className={styles.box}>
            <Image
              src={Img1}
              style={{
                width: "600px",
                height: "300px",
              }}
            />
            <div className={styles.box1}>
              <p className={styles.primary}>Verticard Simple CSS Template</p>

              <p>
                Curabitur ac est dapibus, ultricies diam non, vestibulum odio.
                Sed ac nunc lacinia, maximus nisi non, efficitur lacus, Donec
                efficitur at dui non molestie.
              </p>
              <p>
                Verticard is provided by TemplateMo site for 100% free download.
                You can use it absolutely free for any website. Template
                re-distribution is NOT allowed on any kind of download website.
                Thank you.
              </p>
            </div>
          </div>
          <div className={styles.box2}>
            <ul>
              <li className={styles.b1}>
                <Link href="/">Intro</Link>
              </li>
              <br />
              <li className={styles.b1}>
                <Link href="/gallery">Gallery</Link>
              </li>
              <br />
              <li className={styles.b1}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <footer>Copyright 2019 Simple Profile</footer>
        <footer>designed by TemplateMo</footer>
      </div>
    </div>
  );
}
