import { Box, TextField } from "@mui/material";

interface CustomTextInputProps {
  input: any;
  meta: any;
  label?: string;
  required?: boolean;
  boxStyle?: any;
  showLabel?: boolean;
  disabled?: boolean;
  placeholder: string;
  sx?: any;
}

const CustomTextField = ({
  input,
  meta,
  label,
  required,
  boxStyle,
  disabled,
  showLabel = true,
  placeholder,
  sx = {},
  ...rest
}: CustomTextInputProps) => {
  return (
    <Box>
      <TextField
        variant="outlined"
        value={input?.value}
        sx={sx}
        label={label}
        onChange={input.onChange}
        error={(meta.touched || meta.modified) && meta.invalid ? true : false}
        helperText={
          (meta.touched || meta.modified) && meta.invalid && meta.error
        }
        disabled={disabled}
        placeholder={placeholder}
        {...rest}
      />
    </Box>
  );
};

export default CustomTextField;
