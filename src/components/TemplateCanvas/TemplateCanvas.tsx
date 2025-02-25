import Sidebar from "../Sidebar/Sidebar";
import Canvas from "../Canvas/CustomCanvas";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ITextSuggestions } from "../../common/interfaces/textSuggestions.interface";

const TemplateCanvas = ({
  textSuggestions,
}: {
  textSuggestions?: ITextSuggestions;
}) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Sidebar />
        <Canvas textSuggestions={textSuggestions} />
      </div>
    </DndProvider>
  );
};

export default TemplateCanvas;
