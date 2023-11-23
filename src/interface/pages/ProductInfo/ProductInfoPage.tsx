import { useLoaderData } from 'react-router-dom';
import { ServerProduct } from '../../../domain/product';
import styles from './ProductInfoPage.module.scss';

export const ProductInfoPage = () => {
  const product = useLoaderData();
  const productEntries = Object.entries(product as ServerProduct);

  return (
    <>
      <h1>Product info</h1>
      <ul>
        {productEntries.map(([key, value]) => (
          <li key={key} className={styles.detail}>
            {key}: {value}
          </li>
        ))}
      </ul>
    </>
  );
};
