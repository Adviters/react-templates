import * as fabric from "fabric";

export const DROP_ITEMS = {
  text: () => {
    const text = new fabric.Textbox("Nuevo Texto", {
      fill: "#000",
    });

    return text;
  },

  line: () => {
    const line = new fabric.Line([10, 10, 200, 10], {
      strokeWidth: 1,
      stroke: "#000",
    });

    return line;
  },
  rect: () => {
    const rect = new fabric.Rect({
      fill: "#000",
      width: 100,
      height: 100,
    });

    return rect;
  },
  circle: () => {
    const circle = new fabric.Circle({
      fill: "#000",
      radius: 50,
    });
    return circle;
  },
  triangle: () => {
    const triangle = new fabric.Triangle({
      fill: "#000",
      width: 100,
      height: 100,
    });
    return triangle;
  },
};
