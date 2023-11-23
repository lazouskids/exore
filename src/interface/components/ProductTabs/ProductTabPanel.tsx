import Typography from '@mui/material/Typography';
import styles from './ProductTabs.module.scss';

interface ProductTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export const ProductTabPanel = (props: ProductTabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} id={String(index)} {...other}>
      {value === index && (
        <div className={styles.inner}>
          <Typography>{children}</Typography>
        </div>
      )}
    </div>
  );
};
