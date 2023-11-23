import { useForm } from 'react-hook-form';
import { LocalProduct } from '../../../domain/product';
import cx from 'classnames';
import styles from './LocalProductForm.module.scss';

interface LocalProductFormProps {
  defaultValues?: LocalProduct;
  onSubmit: (data: LocalProduct) => void;
}

export const LocalProductForm = ({
  defaultValues,
  onSubmit,
}: LocalProductFormProps) => {
  const { register, handleSubmit } = useForm<LocalProduct>({
    defaultValues,
  });

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label className={cx([styles.label, styles.input_label])}>
        Title:
        <input
          className={styles.input}
          {...register('title', {
            required: true,
          })}
        />
      </label>
      <label className={cx([styles.label, styles.input_label])}>
        Description:
        <input
          className={styles.input}
          {...register('description', {
            required: true,
          })}
        />
      </label>
      <label className={cx([styles.label, styles.input_label])}>
        Price:
        <input
          className={styles.input}
          type="number"
          {...register('price', {
            required: true,
            valueAsNumber: true,
          })}
        />
      </label>
      <label className={cx([styles.label, styles.checkbox_label])}>
        Is published:
        <input type="checkbox" {...register('isPublished')} />
      </label>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};
