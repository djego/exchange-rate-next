import { House } from '../../model/house';
import styles from '../../styles/Home.module.css';
import Moment from 'react-moment';
import 'moment/locale/es';

interface Props {
  houses: House[];
}

export const ListHouse = ({ houses }: Props) => {
  const sell_cheap_houses = houses.sort((a, b) => a.compra - b.compra);
  return (
  <>
      { sell_cheap_houses.map( (house, id) => 
        <a href={house.url} key={id} className={styles.card} > 
          <h2><img src={house.image} width="16" /> {house.tienda}</h2>
          <p>Compra: <b>{house.compra}</b> | Venta: <b>{house.venta}</b></p>
          <Moment locale="es" fromNow>{house.fecha}</Moment>
        </a>
      )}
  </>
  )};