import { House } from '../interfaces/house';
import axios from 'axios';

const baseRoot = process.env.NEXT_PUBLIC_API_URI;
const storeCollectionURL = `${baseRoot}/resume`

export const fetchStores = async (): Promise<House[]> => {
  const response = await axios.get(storeCollectionURL);
  return response.data.map(
    ({ compra, tienda, url, venta, image, fecha }: any) => ({ compra, tienda, url, venta, image, fecha } as House)
  );
}
