import Head from "next/head";
import styles from "../styles/Home.module.css";
import { fetchStores } from "../api/rest";
import { House } from "../interfaces/house";
import { ListHouse } from "../components/list";
import Image from "next/image";

interface Props {
  houses: House[];
}

const Home = ({ houses }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          {"Dolares en Perú | Compra: " +
            houses[0].compra +
            " - Venta: " +
            houses[0].venta}
        </title>
        <meta
          name="description"
          content={
            "Cambia dolares al mejor precio de compra y venta en las tiendas de cambio online"
          }
        />
        <meta name="theme-color" content="#F02639" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f02639" />
      </Head>

      <main className={styles.main}>
        <Image
          src="/logo-horizontal.png"
          alt="Dolar en perú logo"
          width="250"
          height="75"
        />
        <h1 className={styles.title}>Tiendas de cambio online en Perú</h1>
        <ListHouse houses={houses} />
      </main>

      <footer className={styles.footer}>
        <p>
          <a
            rel="noreferrer"
            href="https://github.com/djego/exchange-rate-next"
            target="_blank"
          >
            <Image
              src="/github.svg"
              alt="Github"
              width="24"
              height="24"
            />
            &nbsp;@djego
          </a>
        </p>
      </footer>
    </div>
  );
};

Home.getInitialProps = async () => {
  const houses = await fetchStores();
  return {
    houses,
    revalidate: 5 * 60,
  };
};

export default Home;
