// src/App.tsx
import React from "react";
import "./App.css";
import Canvas from "./components/Canvas/CustomCanvas";
import Sidebar from "./components/Sidebar/Sidebar";

const App: React.FC = () => {
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Sidebar />
        <Canvas />
      </div>
    </div>
  );
};

export default App;
