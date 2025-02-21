import { Box } from "@mui/material";
import { SketchPicker } from "react-color";

const CustomColorPicker = ({
  input,
  onChange,
}: {
  input: any;
  onChange: any;
}) => {
  return (
    <Box>
      <SketchPicker
        color={input.value || "#fff"}
        onChangeComplete={(color) => {
          input.onChange(color.hex);
          onChange(color.hex);
        }}
      />
    </Box>
  );
};

export default CustomColorPicker;
