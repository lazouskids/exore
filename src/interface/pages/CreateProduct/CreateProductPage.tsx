import { LocalProduct } from '../../../domain/product';
import { SubmitHandler } from 'react-hook-form';
import { LocalProductForm } from '../../components/LocalProductForm/LocalProductForm';
import { ProductApplication } from '../../../application/product';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { getLocalProduct } from './CreateProductPage.utils';

const { create: createProduct } = new ProductApplication();

export const CreateProductPage = () => {
  const navigate = useNavigate();

  const handleSubmit: SubmitHandler<LocalProduct> = async (data) => {
    const product = getLocalProduct(data);
    const success = await createProduct(product);

    if (success) {
      navigate(routes.productList);
    }
  };

  return (
    <>
      <h1>Create product</h1>
      <LocalProductForm onSubmit={handleSubmit} />
    </>
  );
};
