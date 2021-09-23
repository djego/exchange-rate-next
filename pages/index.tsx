import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { fetchStores } from '../api/rest';
import { House } from '../model/house';
import { ListHouse } from '../components/list';
import Image from 'next/image'

interface Props {
  houses: House[];
}

const Home = ({ houses }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dolares en Perú, tiendas</title>
        <meta name="description" content="Cambio de dolares en todas las tiendas online" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f02639" />

      </Head>

      <main className={styles.main}>
        <Image src="/logo-horizontal.png" alt="Dolar en perú logo" width="250" height="75"  />
        <h1 className={styles.title}>
        Tiendas de cambio online en Perú
        </h1>
        <div className={styles.grid}>
        <ListHouse houses={houses} />

        <a href="#" className={styles.card}>
            <h2></h2>
            <p>Más tiendas pronto...</p>
          </a>

        </div>
        
      </main>

      <footer className={styles.footer}>
        <p><a href="https://github.com/djego/exchange-rate-next" target="_blank">Github</a></p>
      </footer>
    </div>
  )
}

Home.getInitialProps = async () => {
  const houses = await fetchStores();
  return {
    houses,
  }
}


export default Home
