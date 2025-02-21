// src/App.tsx
import React from "react";
import Canvas from "./components/Canvas/CustomCanvas";
import Sidebar from "./components/Sidebar/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App: React.FC = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Sidebar />
          <Canvas />
        </div>
      </div>
    </DndProvider>
  );
};

export default App;
