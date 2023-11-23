import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { AuthGuard } from '../../components/AuthGuard/AuthGuard';
import styles from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <AuthGuard>
          <Outlet />
        </AuthGuard>
      </main>
    </>
  );
};
