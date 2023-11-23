import { useEffect, useState } from 'react';
import { APIService } from '../../../services/api/api';
import { SeactItem } from './SearchItem';
import { useNavigate } from 'react-router-dom';
import { getProductInfoLink } from '../../../router/utils';
import { ServerProduct } from '../../../domain/product';
import styles from './Search.module.scss';

const { getAll: getAllProducts } = new APIService();

export const Search = () => {
  const [products, setProducts] = useState<ServerProduct[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    setSearchValue(e.currentTarget.value);

  const searchedProducts = products.filter((item) =>
    item.title.includes(searchValue),
  );

  const handleButtonClick = () => setSearchValue('');

  useEffect(() => {
    (async () => {
      const response = await getAllProducts();
      setProducts(response);
    })();
  }, []);

  return (
    <div className={styles.wrapper}>
      <input
        value={searchValue}
        className={styles.input}
        onChange={handleInputChange}
        type="text"
        placeholder="Start typing a title"
      />
      <button onClick={handleButtonClick} className={styles.button}>
        Clear
      </button>
      {searchValue && searchedProducts.length > 0 && (
        <ul className={styles.result}>
          {searchedProducts.map(({ id, title }) => (
            <SeactItem
              key={id}
              title={title}
              onClick={() => navigate(getProductInfoLink(id))}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
