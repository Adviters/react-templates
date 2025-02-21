import { Box, TextField } from "@mui/material";
import { JSX } from "@emotion/react/jsx-runtime";

interface CustomTextInputProps {
  input: any;
  meta: any;
  label?: string;
  required?: boolean;
  boxStyle?: any;
  showLabel?: boolean;
  disabled?: boolean;
  placeholder: string;
  onChange?: (val: any) => void;
  sx?: any;
}

const CustomNumberInput = ({
  input,
  meta,
  label,
  required,
  onChange,
  boxStyle,
  disabled,
  ...rest
}: CustomTextInputProps): JSX.Element => {
  const handleChange = (e: any) => {
    if (onChange) onChange(e.target.value);
    if (input?.onChange) input?.onChange(e.target.value);
  };
  return (
    <Box>
      <TextField
        size="small"
        type="number"
        variant="outlined"
        value={input?.value}
        label={label}
        onChange={handleChange}
        error={(meta.touched || meta.modified) && meta.invalid ? true : false}
        helperText={
          (meta.touched || meta.modified) && meta.invalid && meta.error
        }
        disabled={disabled}
        {...rest}
      />
    </Box>
  );
};

export default CustomNumberInput;
