import { createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';
import { ProductListPage } from '../interface/pages/ProductList/ProductListPage';
import { homeLoader, productListLoader, productPageLoader } from './loaders';
import { Layout } from '../interface/pages/Layout/Layout';
import { ProductInfoPage } from '../interface/pages/ProductInfo/ProductInfoPage';
import { CreateProductPage } from '../interface/pages/CreateProduct/CreateProductPage';
import { EditProductPage } from '../interface/pages/EditProduct/EditProductPage';
import { AuthPage } from '../interface/pages/Auth/Auth';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Layout />,
    children: [
      {
        path: routes.home,
        loader: homeLoader,
      },
      {
        path: routes.productList,
        element: <ProductListPage />,
        loader: productListLoader,
      },
      {
        path: routes.productInfo,
        element: <ProductInfoPage />,
        loader: ({ params }) => productPageLoader(params.productId as string),
      },
      {
        path: routes.createProduct,
        element: <CreateProductPage />,
      },
      {
        path: routes.editProduct,
        element: <EditProductPage />,
      },
      {
        path: routes.auth,
        element: <AuthPage />,
      },
    ],
  },
]);
