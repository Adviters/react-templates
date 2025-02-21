import { useRef, useState } from "react";
import { FabricImage } from "fabric";

export const useCanvas = ({ setOpen }: { setOpen: any }) => {
  const [canvas, setCanvas] = useState<any>(null);
  const [canvasHistory, setCanvasHistory] = useState<any[]>([]);
  const [redoHistory, setRedoHistory] = useState<any[]>([]);
  const isUndoOrRedo = useRef(false);

  const handleDelete = (e: KeyboardEvent) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const activeObject = canvas.getActiveObject();
      if (activeObject && !activeObject.isEditing) {
        canvas.remove(activeObject);
      }
    }
  };

  const handleUpdateHistory = (newCanvas?: any) => {
    if (!isUndoOrRedo.current) {
      setCanvasHistory((prevHistory) => [
        ...prevHistory,
        newCanvas ? newCanvas.toJSON() : canvas.toJSON(),
      ]);
      setRedoHistory([]);
    }
  };

  const handleUndo = async () => {
    if (canvasHistory.length === 1) return;
    const prevState = canvasHistory[canvasHistory.length - 2];

    try {
      isUndoOrRedo.current = true;
      canvas.clear();

      await canvas.loadFromJSON(prevState);
      const currentState = canvasHistory[canvasHistory.length - 1];
      setRedoHistory((prevRedo) => [currentState, ...prevRedo]);
      setCanvasHistory((prevHist) => prevHist.slice(0, -1));
    } catch (error) {
      console.error("Error al deshacer:", error);
    } finally {
      isUndoOrRedo.current = false;
    }
  };

  const handleRedo = async () => {
    if (redoHistory.length === 0) return;

    const nextState = redoHistory[0];

    try {
      isUndoOrRedo.current = true;
      canvas.clear();
      await canvas.loadFromJSON(nextState);

      setCanvasHistory((prevHistory) => [...prevHistory, nextState]);

      setRedoHistory((prevRedo) => prevRedo.slice(1));
    } catch (error) {
      console.error("Error al rehacer:", error);
    } finally {
      isUndoOrRedo.current = false;
    }
  };

  const handleUploadImage = (values: any) => {
    const file = values.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const imgElement = new Image();
      imgElement.src = e.target?.result as string;

      imgElement.onload = () => {
        const img = new FabricImage(imgElement, {
          left: 100,
          top: 100,
        });

        canvas.add(img);
        setOpen(false);
      };
    };

    reader.readAsDataURL(file);
  };

  return {
    canvas,
    setCanvas,
    canvasHistory,
    setCanvasHistory,
    handleDelete,
    handleUndo,
    handleRedo,
    handleUploadImage,

    handleUpdateHistory,
  };
};
