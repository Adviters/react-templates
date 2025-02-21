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

const SelectionMenu = ({ canvas, type }: { canvas: any; type: string }) => {
  return (
    <Paper
      elevation={1}
      sx={{ position: "absolute", top: 200, right: 600, display: "flex" }}
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
