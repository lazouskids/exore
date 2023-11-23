import { SubmitHandler, useForm } from 'react-hook-form';
import { UserApplication } from '../../../application/user';
import { UserCredentials } from '../../../domain/user';
import { useAuthContext } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../../router/routes';
import styles from './Auth.module.scss';

const { login } = new UserApplication();

export const AuthPage = () => {
  const navigate = useNavigate();
  const { set: setToken } = useAuthContext();
  const { register, handleSubmit, setValue } = useForm<UserCredentials>();

  const submit: SubmitHandler<UserCredentials> = async (data) => {
    const response = await login(data.username, data.password);
    if (response) {
      setToken(response);
      navigate(routes.home);
    }
  };

  const handleButtonClick = () => {
    setValue('username', 'mor_2314');
    setValue('password', '83r5^_');
    return false;
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submit)}>
      <label className={styles.label}>
        Username
        <input
          {...register('username', {
            required: true,
          })}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        Password
        <input
          type="password"
          {...register('password', {
            required: true,
          })}
          className={styles.input}
        />
      </label>
      <button
        type="button"
        onClick={handleButtonClick}
        className={styles.fill_button}>
        Fill
      </button>
      <button type="submit">Send</button>
    </form>
  );
};
