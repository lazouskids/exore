import { redirect } from 'react-router-dom';
import { routes } from './routes';
import { APIService } from '../services/api/api';

const { getAll: getAllProducts, getById: getProductById } = new APIService();

export const homeLoader = async () => redirect(routes.productList);

export const productListLoader = async () => getAllProducts();

export const productPageLoader = async (id: string) => getProductById(id);
