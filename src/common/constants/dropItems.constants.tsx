import * as fabric from "fabric";

export const DROP_ITEMS = {
  text: () => {
    const text = new fabric.Textbox("Nuevo Texto", {
      left: 50,
      top: 50,
      fill: "#000",
    });

    return text;
  },

  line: () => {
    const line = new fabric.Line([10, 10, 200, 200], {
      left: 50,
      top: 50,
      strokeWidth: 1,
      stroke: "#F00",
    });

    return line;
  },
  rect: () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: "#0F0",
      width: 100,
      height: 100,
    });

    return rect;
  },
  circle: () => {
    const circle = new fabric.Circle({
      left: 100,
      top: 100,
      fill: "#00F",
      radius: 50,
    });
    return circle;
  },
  triangle: () => {
    const triangle = new fabric.Triangle({
      left: 100,
      top: 100,
      fill: "#00F",
      width: 100,
      height: 100,
    });
    return triangle;
  },
};
