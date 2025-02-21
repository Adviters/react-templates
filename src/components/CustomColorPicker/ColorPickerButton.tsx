import { FormatColorFill } from "@mui/icons-material";
import { IconButton, Menu } from "@mui/material";
import { Field } from "react-final-form";
import CustomColorPicker from "./CustomColorPicker";
import { useState } from "react";

const ColorPickerButton = ({ onChange }: { onChange: any }) => {
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
      <IconButton onClick={handleClick}>
        <FormatColorFill />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <Field
          name="color"
          component={CustomColorPicker as any}
          onChange={onChange}
        />
      </Menu>
    </>
  );
};

export default ColorPickerButton;
