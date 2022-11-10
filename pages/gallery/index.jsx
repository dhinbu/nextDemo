import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";

export default function Gallery() {
  const apiKey = process.env.APIKEY;
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:1337/api/pics", {
        headers: {
          authorization: "Bearer"+apiKey,
        },
      });
      console.log(res);
    };

    getData();
  }, []);

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
            <div className={styles.box1}>
              <p>
                This gallery contains a beautiful hover effect and pop-up larger
                images. Please mention TemplateMo site to your friends.
              </p>
              <div>
                {[].map((image) => {
                  <Image
                    src="image"
                    style={{
                      width: "600px",
                      height: "300px",
                    }}
                  />;
                })}
              </div>
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
