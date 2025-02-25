import { useEffect, useRef, useState } from "react";
import { Canvas } from "fabric";
import { Box, Button } from "@mui/material";
import { useCanvas } from "../../common/hooks/useCanvas";
import { useDnD } from "../../common/hooks/useDnD";
import CustomFileUpload from "../CustomFileUpload/CustomFileUpload";
import TextEditor from "../TextEditor/TextEditor";
import SelectionMenu from "../SelectionMenu/SelectionMenu";
import { exportCanvasToStaticHTML } from "../../utils/exportHTML";
import TextSuggestions from "../TextSuggestions/TextSuggestions";
import { ICoords } from "../../common/interfaces/coords.interface";
import { ITextSuggestions } from "../../common/interfaces/textSuggestions.interface";

const CustomCanvas = ({
  textSuggestions,
}: {
  textSuggestions?: ITextSuggestions;
}) => {
  const canvasRef = useRef<any>(null);
  const [open, setOpen] = useState(false);
  const [selectedObject, setSelectedObject] = useState<any>(null);
  const coords = useRef<ICoords>({ left: 200, top: 300 });

  const {
    canvas,
    canvasHistory,
    handleDelete,
    handleUndo,
    handleRedo,
    handleUploadImage,
    setCanvas,
    setCanvasHistory,
    handleUpdateHistory,
  } = useCanvas({ setOpen });

  const { drop } = useDnD({ canvas, setOpen });

  useEffect(() => {
    const canvasFabric = new Canvas(canvasRef.current, {
      width: 900,
      height: 550,
      backgroundColor: "white",
      preserveObjectStacking: true,
    });
    setCanvas(canvasFabric);
    setCanvasHistory([canvasFabric.toJSON()]);
    canvasFabric.on("selection:created", ({ selected }) => {
      setSelectedObject(selected[0]);
      coords.current = { left: selected[0].left, top: selected[0].top };
    });

    canvasFabric.on("selection:updated", ({ selected }) => {
      setSelectedObject(selected[0]);
      coords.current = { left: selected[0].left, top: selected[0].top };
    });

    canvasFabric.on("selection:cleared", () => {
      setSelectedObject(null);
    });

    canvasFabric.on("object:moving", (e) => {
      const { left, top } = e.target;
      coords.current = { left, top };
    });

    return () => {
      canvasFabric.dispose();
    };
  }, []);

  useEffect(() => {
    canvas &&
      canvas.on("object:added", ({ target: { canvas: newCanvas } }: any) => {
        handleUpdateHistory(newCanvas);
      });
    canvas &&
      canvas.on("object:modified", ({ target: { canvas: newCanvas } }: any) => {
        handleUpdateHistory(newCanvas);
      });

    canvas &&
      canvas.on("object:removed", () => {
        handleUpdateHistory();
      });

    window.addEventListener("keydown", handleDelete);
    return () => {
      window.removeEventListener("keydown", handleDelete);
    };
  }, [canvas]);

  useEffect(() => {
    const handleKeydownUndo = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "z") {
        if (canvasHistory.length === 0) return;

        handleUndo();
      }
    };

    const handleKeydownRedo = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "y") {
        handleRedo();
      }
    };

    window.addEventListener("keydown", handleKeydownUndo);
    window.addEventListener("keydown", handleKeydownRedo);

    return () => {
      window.removeEventListener("keydown", handleKeydownUndo);
      window.removeEventListener("keydown", handleKeydownRedo);
    };
  }, [canvasHistory]);

  return (
    <Box>
      <Box
        ref={drop as any}
        style={{
          border: "2px dashed #ccc",
          margin: "10px 0",
          minHeight: "550px",
        }}
      >
        <canvas ref={canvasRef}></canvas>
      </Box>
      <Button onClick={() => exportCanvasToStaticHTML({ canvas })}>
        Exportar HTML
      </Button>
      {selectedObject &&
        (selectedObject.type === "textbox" ? (
          <>
            <TextEditor
              canvas={canvas}
              selectedObject={selectedObject}
              coords={coords.current}
            />
            {textSuggestions && textSuggestions.suggestions && (
              <TextSuggestions
                selectedObject={selectedObject}
                suggestions={textSuggestions.suggestions}
                coords={coords.current}
                textChar={textSuggestions.textChar}
                closeChar={textSuggestions.closeChar}
              />
            )}
          </>
        ) : (
          <SelectionMenu
            canvas={canvas}
            type={selectedObject.type}
            coords={coords.current}
            selectedObject={selectedObject}
          />
        ))}

      <CustomFileUpload
        open={open}
        setOpen={setOpen}
        handleUploadImage={handleUploadImage}
      />
    </Box>
  );
};

export default CustomCanvas;
