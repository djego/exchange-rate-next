import { House } from '../../model/house';
import styles from '../../styles/Home.module.css';

interface Props {
  houses: House[];
}

export const ListHouse = ({ houses }: Props) => {
  return (
  <>
      { houses.map( (house, id) => 
        <a href={house.url} key={id} className={styles.card} > 
          <h2>{house.tienda} &#36;</h2>
          <span>Compra: <b>{house.compra}</b></span>
          <span> | </span>
          <span>Venta: <b>{house.venta}</b></span>

        </a>
      )}
  </>
  )};