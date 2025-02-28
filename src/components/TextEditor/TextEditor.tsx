import { Box } from "@mui/material";
import { Field, Form } from "react-final-form";
import CustomSelect from "../CustomSelect/CustomSelect";
import {
  FormatBold,
  FormatColorFill,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import CommonActions from "../CommonActions/CommonActions";
import ColorPickerButton from "../CustomColorPicker/ColorPickerButton";
import { handleFormatChange } from "../../utils/handleFormatChange";
import { FabricText } from "fabric";
import CustomNumberInput from "../CustomNumberInput/CustomNumberInput";
import { FONT_OPTIONS } from "../../common/constants/texteditor.constants";
import { ICoords } from "../../common/interfaces/coords.interface";

const TextEditor = ({
  canvas,
  selectedObject,
  coords,
}: {
  canvas: any;
  selectedObject: FabricText;
  coords: ICoords;
}) => {
  const initialValues = {
    fontFamily: selectedObject.fontFamily,
    fontSize: selectedObject.fontSize,
    bold: selectedObject.fontWeight === "bold",
    italic: selectedObject.fontStyle === "italic",
    underline: selectedObject.underline,
    color: selectedObject.fill,
  };

  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#fff",
        padding: 2,
        borderRadius: "5px",
        boxShadow: "0px 0px 2px black",
        position: "absolute",
        top: coords.top + selectedObject.height * selectedObject.scaleY + 50,
        left: coords.left + 100,
      }}
    >
      <Form
        onSubmit={() => {}}
        initialValues={initialValues}
        render={() => {
          return (
            <>
              <Field
                name="fontFamily"
                component={CustomSelect}
                options={FONT_OPTIONS.map((opt) => ({
                  label: opt,
                  value: opt,
                }))}
                onChange={(val: any) =>
                  handleFormatChange(canvas, "fontFamily", val)
                }
                sx={{ width: "150px" }}
                label={"Fuente"}
              />

              <Field
                name="fontSize"
                component={CustomNumberInput}
                onChange={(val: any) =>
                  handleFormatChange(canvas, "fontSize", val)
                }
                sx={{ width: "100px", marginLeft: 1.5 }}
                label={"Tamaño"}
              />
              <Field
                name="bold"
                component={CustomCheckbox}
                tooltip={"Negrita"}
                icon={<FormatBold />}
                onChange={(val: any) =>
                  handleFormatChange(
                    canvas,
                    "fontWeight",
                    val ? "bold" : "normal"
                  )
                }
              />
              <Field
                name="italic"
                component={CustomCheckbox}
                icon={<FormatItalic />}
                tooltip="Itálica"
                onChange={(val: any) =>
                  handleFormatChange(
                    canvas,
                    "fontStyle",
                    val ? "italic" : "normal"
                  )
                }
              />
              <Field
                name="underline"
                component={CustomCheckbox}
                tooltip="Subrayado"
                icon={<FormatUnderlined />}
                onChange={(val: any) =>
                  handleFormatChange(canvas, "underline", val)
                }
              />

              <ColorPickerButton
                onChange={(val: any) => handleFormatChange(canvas, "fill", val)}
                icon={<FormatColorFill />}
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
