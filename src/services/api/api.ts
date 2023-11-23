import { ServerProduct, LocalProduct, Product } from '../../domain/product';
import { mapProductApiToServerProduct } from './apiAdapters';
import { LoginResponseApi, ProductApi } from './apiTypes';

interface APIServiceInterface {
  getAll: () => Promise<ServerProduct[]>;
  getById: (id: string) => Promise<ServerProduct | null>;
  delete: (id: string) => Promise<Boolean>;
  add: (product: LocalProduct) => Promise<Boolean>;
  update: (product: Product) => Promise<Boolean>;
  login: (username: string, password: string) => Promise<string>;
}

export class APIService implements APIServiceInterface {
  async getAll() {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const body = (await response.json()) as ProductApi[];
      return body.map((item) => mapProductApiToServerProduct(item));
    } catch (e) {
      console.error('Fetching all products failed', e);
      return [];
    }
  }

  async getById(id: string) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const body = (await response.json()) as ProductApi;
      return mapProductApiToServerProduct(body);
    } catch (e) {
      console.error(`Fetching product with id: ${id} failed`, e);
      return null;
    }
  }

  async delete(id: string) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
      });
      return response.ok;
    } catch (e) {
      console.error(`Deleting product with id ${id} failed`);
      return false;
    }
  }

  async add(product: LocalProduct) {
    try {
      const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        body: JSON.stringify(product),
      });
      return response.ok;
    } catch (e) {
      console.error(`Adding product with id ${product.id} failed`, e);
      return false;
    }
  }

  async update(product: Product) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${product.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(product),
        },
      );
      return response.ok;
    } catch (e) {
      console.error(`Updating product with id ${product.id} failed`, e);
      return false;
    }
  }

  async login(username: string, password: string) {
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: [['Content-Type', 'application/json']],
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const body = (await response.json()) as LoginResponseApi;
      return body.token ?? '';
    } catch (e) {
      console.error('Login failed', e);
      return '';
    }
  }
}
