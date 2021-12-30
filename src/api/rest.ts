import { House } from '../model/house';
import axios from 'axios';

const baseRoot = process.env.NEXT_PUBLIC_API_URI;
const storeCollectionURL = `${baseRoot}/resume`

export const fetchStores = async (): Promise<House[]> => {
  const res = await axios.get(storeCollectionURL);
  let data = eval(res.data);
  return data.map(
    ({ compra, tienda, url, venta, image, fecha }: any) => ({ compra, tienda, url, venta, image, fecha } as House)
  );
}
