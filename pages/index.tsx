import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { fetchStores } from '../api/rest';
import { House } from '../model/house';
import { ListHouse } from '../components/list';
interface Props {
  houses: House[];
}

const Home = ({ houses }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dolares en todas las tiendas</title>
        <meta name="description" content="Cambio de dolares en todas las tiendas online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Todas las tiendas de cambio online &#36;
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
