import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import MUIButtonGroup from '@mui/material/ButtonGroup';
import styles from './ButtonGroup.module.scss';

interface ButtonGroupProps {
  buttons: number[];
  activeIndex: number;
  label?: string;
  onClick: (index: number) => void;
}

export const ButtonGroup = ({
  buttons,
  activeIndex,
  label,
  onClick,
}: ButtonGroupProps) => {
  return (
    <div className={styles.wrapper}>
      <MUIButtonGroup className={styles.button_group}>
        {buttons.map((value, index) => {
          const variant = index === activeIndex ? 'outlined' : 'contained';
          return (
            <Button
              key={value}
              onClick={() => onClick(index)}
              variant={variant}>
              {value}
            </Button>
          );
        })}
      </MUIButtonGroup>
      {label && <Typography className={styles.label}>{label}</Typography>}
    </div>
  );
};
