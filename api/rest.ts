import { House } from '../model/house';
import fetch from 'isomorphic-unfetch';

const baseRoot = process.env.NEXT_PUBLIC_API_URI;
const storeCollectionURL = `${baseRoot}/resume`

export const fetchStores = async (): Promise<House[]> => {
  const res = await fetch(storeCollectionURL)
  const data = await res.json();
  return data.map(
    ({ compra, tienda, url, venta, image, fecha }: any) => ({ compra, tienda, url, venta, image, fecha } as House)
  );
}
