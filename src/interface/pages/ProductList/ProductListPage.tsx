import { useLoaderData } from 'react-router-dom';
import { ServerProduct } from '../../../domain/product';
import { ProductTabs } from '../../components/ProductTabs/ProductTabs';
import { useSelector } from '../../../store';

export const ProductListPage = () => {
  const loadedItems = useLoaderData();
  const serverProducts = loadedItems as ServerProduct[];

  const localProducts = useSelector(({ products }) => products.items);

  return (
    <ProductTabs
      serverProducts={serverProducts}
      localProducts={localProducts}
    />
  );
};
