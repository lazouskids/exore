import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServerProduct } from '../../../domain/product';
import { ProductCard } from '../ProductCard/ProductCard';
import { getProductInfoLink } from '../../../router/utils';
import { ButtonGroup } from '../ButtonGroup/ButtonGroup';
import styles from './ProductList.module.scss';

interface ProductListProps {
  products: ServerProduct[];
}

const buttonGroup = [8, 16, 20];

export const ProductList = ({ products }: ProductListProps) => {
  const navigate = useNavigate();
  const [buttonIndex, setButtonIndex] = useState(0);

  const itemsCount = buttonGroup[buttonIndex];
  const shownItems = products.slice(0, itemsCount);

  const handleButtonClick = (index: number) => setButtonIndex(index);

  return (
    <div>
      <div className={styles.buttons}>
        <ButtonGroup
          buttons={buttonGroup}
          activeIndex={buttonIndex}
          onClick={handleButtonClick}
          label="Products shown"
        />
      </div>
      <div className={styles.wrapper}>
        {shownItems.map((item) => (
          <ProductCard
            {...item}
            key={item.id}
            onClick={() => navigate(getProductInfoLink(item.id))}
          />
        ))}
      </div>
    </div>
  );
};
