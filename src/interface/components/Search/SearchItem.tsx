import styles from './Search.module.scss';

interface SeactItemProps {
  title: string;
  onClick: () => void;
}

export const SeactItem = ({ title, onClick }: SeactItemProps) => (
  <li onClick={onClick} className={styles.search_item}>
    {title}
  </li>
);
