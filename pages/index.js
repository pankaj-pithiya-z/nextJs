import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>

      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium eos quasi esse similique voluptate at velit iure, est officia voluptatum reiciendis aliquid expedita reprehenderit laudantium. Consectetur vitae similique quam!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab praesentium eos quasi esse similique voluptate at velit iure, est officia voluptatum reiciendis aliquid expedita reprehenderit laudantium. Consectetur vitae similique quam!</p>
        <Link href="/ninjas" className={styles.btn}>
          See Ninja Listing
        </Link>
        <Footer />
      </div>
    </>
  )
}
