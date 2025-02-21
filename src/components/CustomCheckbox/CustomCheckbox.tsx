import { Box, Checkbox, Typography } from "@mui/material";

const CustomCheckbox = ({
  input,
  icon,
  checkedIcon,
  label = "",
  onChange,
  ...rest
}: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
      }}
    >
      <Checkbox
        checked={Boolean(input?.value)}
        size="small"
        //sx={checkBoxStyle}
        value={input?.value}
        onChange={(e) => {
          input.onChange(e);
          onChange && onChange(e.target.checked);
        }}
        icon={icon}
        checkedIcon={checkedIcon ?? icon}
        {...rest}
      />
      <Typography sx={{ fontSize: 14 }}>
        {label ?? input?.name?.split(".")[1] ?? input?.name}
      </Typography>
    </Box>
  );
};

export default CustomCheckbox;
