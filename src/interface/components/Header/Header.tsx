import { Link } from 'react-router-dom';
import { routes } from '../../../router/routes';
import { Logout } from '../Logout/Logout';
import { useAuthContext } from '../../context/authContext';
import { Search } from '../Search/Search';
import styles from './Header.module.scss';

const navItems = [
  { label: 'Products', to: routes.productList },
  { label: 'Create product', to: routes.createProduct },
];

export const Header = () => {
  const { token } = useAuthContext();

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <span className={styles.project_name}>EXORE</span>
          {!!token && <Logout />}
        </div>
        {!!token && <Search />}
        <nav>
          {navItems.map(({ label, to }) => (
            <Link key={label} className={styles.nav_link} to={to}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
