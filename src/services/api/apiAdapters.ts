import { ServerProduct } from '../../domain/product';
import { ProductApi } from './apiTypes';

export const mapProductApiToServerProduct = (
  product: ProductApi,
): ServerProduct => ({
  id: product.id ? String(product.id) : String(Math.random() * 1000000),
  title: product.title ?? '',
  price: product.price ?? 0,
  description: product.description ?? '',
  image: product.image ?? '',
});
