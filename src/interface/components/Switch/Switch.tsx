import MUISwitch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

interface SwitchProps {
  value: string;
  checked: boolean;
  cn?: string;
  onChange: () => void;
}

export const Switch = ({ value, checked, cn, onChange }: SwitchProps) => {
  return (
    <FormControlLabel
      checked={checked}
      value={value}
      control={<MUISwitch color="primary" />}
      label={value}
      labelPlacement="end"
      className={cn}
      onChange={onChange}
    />
  );
};
