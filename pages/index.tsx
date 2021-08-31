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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/logo-horizontal.png" alt="Dolar en perú logo" width="250" height="75"  />
        <h1 className={styles.title}>
        Tiendas de cambio online en Perú
        </h1>
        <div className={styles.grid}>
        <ListHouse houses={houses} />

        <a href="#" className={styles.card}>
            <h2>Más tiendas pronto...</h2>
            <p></p>
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
