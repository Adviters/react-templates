import { HorizontalSplit } from "@mui/icons-material";
import { IconButton, Menu, Tooltip } from "@mui/material";
import { useState } from "react";
import { Field } from "react-final-form";
import CustomNumberInput from "../CustomNumberInput/CustomNumberInput";

const CustomStrokePicker = ({ onChange }: { onChange: (val: any) => void }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Tooltip title="Grosor del borde">
        <IconButton onClick={handleClick}>
          <HorizontalSplit />
        </IconButton>
      </Tooltip>
      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        sx={{ padding: 0 }}
      >
        <Field
          name="strokeWidth"
          component={CustomNumberInput}
          onChange={onChange}
          sx={{ width: "90px", margin: 0 }}
        />
      </Menu>
    </>
  );
};

export default CustomStrokePicker;
