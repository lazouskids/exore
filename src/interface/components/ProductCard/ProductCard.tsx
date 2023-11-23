import cx from 'classnames';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  cn?: string;
  onClick?: () => void;
}

export const ProductCard = ({
  title,
  image,
  price,
  cn,
  onClick,
}: ProductCardProps) => {
  return (
    <div className={cx([styles.wrapper, cn])} onClick={onClick}>
      <div className={styles.image_container}>
        <img src={image} alt={title} className={styles.image} />
      </div>
      <div className={styles.details}>
        <span className={styles.title}>{title}</span>
        <span>Price: ${price}</span>
      </div>
    </div>
  );
};
