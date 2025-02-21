import {
  InputLabel,
  FormHelperText,
  Select as SelectMUI,
  FormControl,
  MenuItem,
  Box,
} from "@mui/material";

const CustomSelect = ({
  label,
  options,
  input,
  required,
  meta,
  variant,
  sx,
  onChange,
  showLabel = true,
  shrink = true,
  customOnchange = null,
  disabled = false,
  ...props
}: any) => {
  return (
    <Box>
      <FormControl
        error={meta && meta.touched && meta.error}
        variant={variant ?? "outlined"}
        sx={sx}
        fullWidth
      >
        <InputLabel
          id="custom-simple-select-label"
          shrink={shrink || input?.value || props?.value ? true : false}
          sx={{ backgroundColor: "#fff", padding: "0 6px" }}
        >
          {label}
        </InputLabel>

        <SelectMUI
          color="primary"
          size="small"
          disabled={disabled || options.length === 0}
          value={
            props?.value ??
            (input?.multiple
              ? Array.isArray(input?.value) && input.value.length
                ? input?.value
                : []
              : input?.value)
          }
          variant={variant ?? "outlined"}
          {...input}
          {...props}
          onChange={({ target: { value } }) => {
            if (customOnchange) customOnchange(value);
            if (onChange) onChange(value);
            if (input?.onChange) input?.onChange(value);
          }}
        >
          {options?.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </SelectMUI>
        {meta && meta?.touched && meta?.error && (
          <FormHelperText>{meta.error}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
