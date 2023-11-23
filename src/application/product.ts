import { IProductApplication, LocalProduct } from './../domain/product';
import { APIService } from '../services/api/api';
import {
  add as addProductToStore,
  update as updateProductInStore,
  remove as deleteProductFromStore,
} from '../store/products';
import { store } from '../store';

const {
  add: addProductToDB,
  update: updateProductInDB,
  delete: deleteProductFromDB,
} = new APIService();

export class ProductApplication implements IProductApplication {
  async create(product: LocalProduct) {
    const success = await addProductToDB(product);
    if (success) {
      store.dispatch(addProductToStore(product));
      return true;
    }
    return false;
  }

  async edit(product: LocalProduct) {
    const success = await updateProductInDB(product);
    if (success) {
      store.dispatch(updateProductInStore(product));
      return true;
    }
    return false;
  }

  async delete(id: string) {
    const isConfirmed = confirm(
      'Are you sure that you want to delete whis product?',
    );
    if (!isConfirmed) {
      return false;
    }
    const success = await deleteProductFromDB(id);
    if (success) {
      store.dispatch(deleteProductFromStore(id));
      return true;
    }
    return false;
  }
}
