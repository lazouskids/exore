import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ProductTabPanel } from './ProductTabPanel';
import { ProductList } from '../ProductList/ProductList';
import { LocalProduct, ServerProduct } from '../../../domain/product';
import { ProductTable } from '../ProductTable/ProductTable';
import { Switch } from '../Switch/Switch';
import styles from './ProductTabs.module.scss';

interface ProductTabsProps {
  serverProducts: ServerProduct[];
  localProducts: LocalProduct[];
}

export const ProductTabs = ({
  serverProducts,
  localProducts,
}: ProductTabsProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [isPublished, setIsPublished] = useState(false);

  const filteredLocalProducts = isPublished
    ? localProducts.filter((item) => item.isPublished)
    : localProducts;

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleSwitchChange = () => setIsPublished((prev) => !prev);

  return (
    <>
      <div className={styles.wrapper}>
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab label="API PRODUCTS" />
          <Tab label="LOCAL PRODUCTS" />
        </Tabs>
      </div>
      <ProductTabPanel value={tabIndex} index={0}>
        <ProductList products={serverProducts} />
      </ProductTabPanel>
      <ProductTabPanel value={tabIndex} index={1}>
        <Switch
          checked={isPublished}
          value="Only published"
          cn={styles.switch}
          onChange={handleSwitchChange}
        />
        {filteredLocalProducts.length > 0 ? (
          <ProductTable products={filteredLocalProducts} />
        ) : (
          <div className={styles.no_products}>No products</div>
        )}
      </ProductTabPanel>
    </>
  );
};
