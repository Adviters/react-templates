import { Box } from "@mui/material";
import { Field, Form } from "react-final-form";
import CustomSelect from "../CustomSelect/CustomSelect";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import CommonActions from "../CommonActions/CommonActions";
import ColorPickerButton from "../CustomColorPicker/ColorPickerButton";

const TextEditor = ({ canvas }: { canvas: any }) => {
  const handleFormatChange = (key: string, value: any) => {
    const text = canvas.getActiveObject();
    text &&
      text.set({
        [key]: value,
      });
    canvas.fire("object:modified", { target: text });
    canvas.renderAll();
  };
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "510px",
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: "5px",
        boxShadow: "0px 0px 2px black",
        position: "absolute",
        top: 200,
        right: 100,
      }}
    >
      <Form
        onSubmit={() => {}}
        render={() => {
          return (
            <>
              <Field
                name="fontFamily"
                component={CustomSelect}
                options={[{ label: "Arial", value: "Arial" }]}
                onChange={(val: any) => handleFormatChange("fontFamily", val)}
                sx={{ width: "150px" }}
                label={"Fuente"}
              />

              <Field
                name="fontSize"
                component={CustomSelect}
                options={[{ label: 12, value: 12 }]}
                onChange={(val: any) => handleFormatChange("fontSize", val)}
                sx={{ width: "100px", marginLeft: 1.5 }}
                label={"Tamaño"}
              />
              <Field
                name="bold"
                component={CustomCheckbox}
                icon={<FormatBold />}
                onChange={(val: any) =>
                  handleFormatChange("fontWeight", val ? "bold" : "normal")
                }
              />
              <Field
                name="italic"
                component={CustomCheckbox}
                icon={<FormatItalic />}
                onChange={(val: any) =>
                  handleFormatChange("fontStyle", val ? "italic" : "normal")
                }
              />
              <Field
                name="underlined"
                component={CustomCheckbox}
                icon={<FormatUnderlined />}
                onChange={(val: any) => handleFormatChange("underline", val)}
              />

              <ColorPickerButton
                onChange={(val: any) => handleFormatChange("fill", val)}
              />
            </>
          );
        }}
      />
      <CommonActions canvas={canvas} />
    </Box>
  );
};

export default TextEditor;
