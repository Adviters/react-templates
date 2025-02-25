import { useTextOptions } from "../../common/hooks/useTextOptions";
import { MenuItem, Paper } from "@mui/material";
import { ICoords } from "../../common/interfaces/coords.interface";
import fabric from "fabric";

const TextSuggestions = ({
  selectedObject,
  suggestions,
  textChar,
  coords,
  closeChar,
}: {
  suggestions: any[];
  selectedObject: fabric.Textbox;
  coords: ICoords;
  textChar: string;
  closeChar: string;
}) => {
  const { handleSelectWord, showSuggestions } = useTextOptions({
    selectedObject,
    textChar,
    closeChar,
  });
  return showSuggestions ? (
    <>
      <Paper
        sx={{
          position: "absolute",
          top: coords.top + selectedObject.height + 30,
          left: coords.left + 550,
        }}
      >
        {suggestions &&
          suggestions.map((sugg) => (
            <MenuItem key={sugg} onClick={() => handleSelectWord(sugg)}>
              {sugg}
            </MenuItem>
          ))}
      </Paper>
    </>
  ) : (
    <></>
  );
};

export default TextSuggestions;
