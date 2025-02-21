import { Box, Checkbox, Tooltip, Typography } from "@mui/material";

const CustomCheckbox = ({
  input,
  icon,
  checkedIcon,
  label = "",
  onChange,
  tooltip,
  ...rest
}: any) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
      }}
    >
      <Tooltip title={tooltip}>
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
      </Tooltip>
      <Typography sx={{ fontSize: 14 }}>
        {label ?? input?.name?.split(".")[1] ?? input?.name}
      </Typography>
    </Box>
  );
};

export default CustomCheckbox;
