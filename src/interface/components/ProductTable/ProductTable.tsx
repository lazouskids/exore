import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { LocalProduct } from '../../../domain/product';
import { useNavigate } from 'react-router-dom';
import { getEditProductLink } from '../../../router/utils';
import { ProductApplication } from '../../../application/product';
import { routes } from '../../../router/routes';

interface ProductTableProps {
  products: LocalProduct[];
}

const { delete: deleteProduct } = new ProductApplication();

export const ProductTable = ({ products }: ProductTableProps) => {
  const navigate = useNavigate();

  const handleButtonClick = async (id: string) => {
    const success = await deleteProduct(id);

    if (success) {
      navigate(routes.productList);
    }
  };

  const modifiedProducts = products.map((item) => ({
    ...item,
    delete: (id: string) => (
      <button onClick={() => handleButtonClick(id)}>delete</button>
    ),
    edit: (id: string) => (
      <button onClick={() => navigate(getEditProductLink(id))}>edit</button>
    ),
  }));

  const productKeys = Object.keys(modifiedProducts[0]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {productKeys.map((item, index) => {
              const align = index === 0 ? 'left' : 'center';
              return (
                <TableCell align={align} key={item}>
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {modifiedProducts.map((item) => {
            const itemValues = Object.values(item);
            return (
              <TableRow key={item.id}>
                {itemValues.map((value, index) => {
                  const content =
                    typeof value === 'function'
                      ? value(item.id)
                      : value.toString();
                  const align = index === 0 ? 'left' : 'center';
                  return (
                    <TableCell
                      key={index}
                      align={align}
                      component="th"
                      scope="row">
                      {content}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
