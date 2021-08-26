import { House } from '../model/house';
import fetch from 'isomorphic-unfetch';

const baseRoot = 'https://ij5n9r.deta.dev/v1';
const storeCollectionURL = `${baseRoot}/resume`

export const fetchStores = async (): Promise<House[]> => {
  const res = await fetch(storeCollectionURL)
  const data = await res.json();
  return data.map(
    ({ compra, tienda, url, venta, }: any) => ({ compra, tienda, url, venta,  } as House)
  );
}
