import { Paper } from "@mui/material";
import CommonActions from "../CommonActions/CommonActions";
import ColorPickerButton from "../CustomColorPicker/ColorPickerButton";
import { Field, Form } from "react-final-form";
import {
  BorderColor,
  FormatColorFill,
  FormatColorReset,
} from "@mui/icons-material";
import CustomStrokePicker from "../CustomStrokePicker/CustomStrokePicker";
import { handleFormatChange } from "../../utils/handleFormatChange";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";
import { ICoords } from "../../common/interfaces/coords.interface";
import { FabricObject } from "fabric";

const SelectionMenu = ({
  canvas,
  type,
  coords,
  selectedObject,
}: {
  canvas: any;
  type: string;
  coords: ICoords;
  selectedObject: FabricObject;
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        position: "absolute",
        top: coords.top + selectedObject.height * selectedObject.scaleY + 50,
        left: coords.left,
        display: "flex",
      }}
    >
      <CommonActions canvas={canvas} />
      {type !== "image" && (
        <Form
          onSubmit={() => {}}
          render={() => (
            <>
              {type !== "line" && (
                <>
                  <ColorPickerButton
                    onChange={(val: any) =>
                      handleFormatChange(canvas, "fill", val)
                    }
                    icon={<FormatColorFill />}
                  />
                  <Field
                    name="transparent"
                    component={CustomCheckbox}
                    icon={<FormatColorReset />}
                    tooltip="Fondo transparente"
                    onChange={(val: any) =>
                      handleFormatChange(
                        canvas,
                        "fill",
                        val ? "transparent" : "#000"
                      )
                    }
                  />
                </>
              )}

              <CustomStrokePicker
                onChange={(val: any) =>
                  handleFormatChange(canvas, "strokeWidth", val)
                }
              />
              <ColorPickerButton
                icon={<BorderColor />}
                onChange={(val: any) =>
                  handleFormatChange(canvas, "stroke", val)
                }
              />
            </>
          )}
        />
      )}
    </Paper>
  );
};

export default SelectionMenu;
