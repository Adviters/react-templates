import { useEffect, useState } from "react";
import fabric from "fabric";

export const useTextOptions = ({
  textChar,
  selectedObject,
  closeChar,
}: {
  textChar: string;
  selectedObject: fabric.Textbox;
  closeChar: string;
}) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedObject.isEditing && e.key === textChar) {
      setShowSuggestions(true);
    }

    if (selectedObject.isEditing && e.key === closeChar) {
      setShowSuggestions(false);
    }

    if (selectedObject.isEditing && e.key === "Backspace") {
      const currentText = selectedObject.text;
      const cursorPosition = selectedObject.selectionStart;

      // Verifica si el carácter anterior al cursor es el carácter que activa las sugerencias
      if (currentText[cursorPosition - 1] === textChar) {
        setShowSuggestions(false);
      }
    }
  };

  const handleSelectWord = (word: string) => {
    if (selectedObject && selectedObject.type === "textbox") {
      const cursorPosition = selectedObject.selectionStart;

      const wordWithoutFirstChar = word.substring(1);

      const currentText = selectedObject.text;

      const beforeCursor = currentText.slice(0, cursorPosition);
      const afterCursor = currentText.slice(cursorPosition);
      const newText = beforeCursor + wordWithoutFirstChar + afterCursor;
      selectedObject.set({
        text: newText,
        selectionStart: cursorPosition + wordWithoutFirstChar.length,
        selectionEnd: cursorPosition + wordWithoutFirstChar.length,
      });

      selectedObject.exitEditing();
      selectedObject.enterEditing();

      selectedObject.canvas!.renderAll();
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return { showSuggestions, handleSelectWord };
};
