import { useNavigate } from 'react-router-dom';
import { UserApplication } from '../../../application/user';
import { routes } from '../../../router/routes';
import { useAuthContext } from '../../context/authContext';
import styles from './Logout.module.scss';

const { logout } = new UserApplication();

export const Logout = () => {
  const { set: setToken } = useAuthContext();

  const navigate = useNavigate();

  const handleButtonClick = async () => {
    const success = await logout();
    if (success) {
      setToken(null);
      navigate(routes.auth);
    }
  };

  return (
    <p className={styles.wrapper}>
      (
      <button className={styles.button} onClick={handleButtonClick}>
        Logout
      </button>
      )
    </p>
  );
};
