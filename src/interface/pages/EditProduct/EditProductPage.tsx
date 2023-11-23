import { LocalProduct } from '../../../domain/product';
import { SubmitHandler } from 'react-hook-form';
import { LocalProductForm } from '../../components/LocalProductForm/LocalProductForm';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from '../../../store';
import { ProductApplication } from '../../../application/product';
import { routes } from '../../../router/routes';

const { edit: editProduct, delete: deleteProduct } = new ProductApplication();

export const EditProductPage = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const id = productId as string;

  const localProducts = useSelector(({ products }) => products.items);
  const element = localProducts.find((item) => item.id === id);

  const handleSubmit: SubmitHandler<LocalProduct> = async (data) => {
    const success = await editProduct(data);

    if (success) {
      navigate(routes.productList);
    }
  };

  const handleButtonClick = async () => {
    const success = await deleteProduct(id);

    if (success) {
      navigate(routes.productList);
    }
  };

  return (
    <>
      <h1>Edit product</h1>
      <p>
        You also can <button onClick={handleButtonClick}>delete</button> this
        product
      </p>
      <LocalProductForm onSubmit={handleSubmit} defaultValues={element} />
    </>
  );
};
