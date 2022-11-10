import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import contact from '../../assets/contact.jpg'
import Image from "next/image";

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
            <div className={styles.boxContact} >
              <div className={styles.bg}>
                <p className={styles.seek2}>Contact Text on Image</p>

                <p className={styles.seek1} >
                  Text on image has a CSS semi-transparent BG layer on image.
                  Praesent ut metus nibh. Vivamus diam purus, finibus et porttitor
                  quis, tristique ac velit. Etiam sed nunc eget lacus sagittis
                  hendrerit at ullamcorper nulla.
                </p>
              </div>
              <form className={styles.seek}>
                
                <input className={styles.seek3} type='text' placeholder='Name' />
                <input className={styles.seek3} type='email' placeholder='Email' />
                <textarea className={styles.seek4} rows={6} cols={45} placeholder='Message...'></textarea>
                <button className={styles.submitButton}>Submit</button>
              </form>
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
