import Sidebar from "../Sidebar/Sidebar";
import Canvas from "../Canvas/CustomCanvas";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ITemplateCanvasProps } from "../../common/interfaces/canvas.interface";

const TemplateCanvas = ({
  textSuggestions,
  height,
  width,
  onSave,
  initialValue,
}: ITemplateCanvasProps) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Sidebar />
        <Canvas
          textSuggestions={textSuggestions}
          height={height}
          width={width}
          onSave={onSave}
          initialValue={initialValue}
        />
      </div>
    </DndProvider>
  );
};

export default TemplateCanvas;
