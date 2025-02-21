import { Paper } from "@mui/material";
import CommonActions from "../CommonActions/CommonActions";
import ColorPickerButton from "../CustomColorPicker/ColorPickerButton";
import { Form } from "react-final-form";

const SelectionMenu = ({ canvas, type }: { canvas: any; type: string }) => {
  const handleColorChange = (val: string) => {
    const activeObj = canvas.getActiveObject();
    activeObj &&
      activeObj.set({
        fill: val,
      });
    canvas.renderAll();
  };

  const handleUploadImage = (values: any) => {};
  return (
    <Paper
      elevation={1}
      sx={{ position: "absolute", top: 200, right: 600, display: "flex" }}
    >
      <CommonActions canvas={canvas} />
      {type !== "image" && (
        <Form
          onSubmit={() => {}}
          render={() => <ColorPickerButton onChange={handleColorChange} />}
        />
      )}
    </Paper>
  );
};

export default SelectionMenu;
