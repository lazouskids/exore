import { LocalProduct } from '../../../domain/product';

export const getLocalProduct = (product: LocalProduct): LocalProduct => ({
  ...product,
  created: new Date(Date.now()).toDateString(),
  id: String(Math.floor(Math.random() * 1000000)),
});
