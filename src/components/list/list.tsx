import { House } from '../../interfaces/house';
import styles from '../../styles/Home.module.css';
import Moment from 'react-moment';
import 'moment/locale/es';

interface Props {
  houses: House[];
}

export const ListHouse = ({ houses }: Props) => {
  return (
    <div>
      <div className={styles.grid}>
      { houses.map( (house, id) => 
        <a href={house.url} key={id} className={styles.card} target="_blank" rel="noreferrer" > 
          <h2><img src={house.image} width="16" height="16" alt={house.tienda} /> {house.tienda}</h2>
          <p>Compra: <b>{house.compra}</b></p>
          <p>Venta: <b>{house.venta}</b></p>
        </a>
      )}
      </div>
      <div className={styles.bottom}>
      <span>Actualizado: </span><Moment locale="es" fromNow>{houses[0].fecha}</Moment>  
      </div>      
    </div>

  )};