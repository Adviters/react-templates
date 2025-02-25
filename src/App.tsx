// src/App.tsx
import React from "react";
import TemplateCanvas from "./components/TemplateCanvas/TemplateCanvas";
const textSuggestions = {
  suggestions: ["{a}", "{b}", "{c}"],
  textChar: "{",
  closeChar: "}",
};
const App: React.FC = () => {
  return (
    <div className="App">
      <TemplateCanvas textSuggestions={textSuggestions} />
    </div>
  );
};

export default App;
