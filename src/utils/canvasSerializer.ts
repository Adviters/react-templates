import { CanvasElement } from "../common/types/canvas-elements";
import {
  canvasCircleToHTML,
  canvasImageToHTML,
  canvasLineToHTML,
  canvasRectangleToHTML,
  canvasTextboxToHTML,
  canvasTriangleToHTML,
} from "./elementSerializer";

const CANVAS_ELEMENT_SERIALIZER_FUNCTIONS: Record<
  CanvasElement,
  (canvasElement: any) => string
> = {
  textbox: canvasTextboxToHTML,
  image: canvasImageToHTML,
  rect: canvasRectangleToHTML,
  circle: canvasCircleToHTML,
  triangle: canvasTriangleToHTML,
  line: canvasLineToHTML,
};

const getFinalHTMLSerialized = (
  canvasWidth: number,
  canvasHeight: number,
  htmlElementsSerialized: string
): string => {
  return `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Canvas Exportado</title>
            <style>
                body { margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: #fff; }
                .canvas-container { position: relative; width: ${canvasWidth}px; height: ${canvasHeight}px; border: 1px solid #ccc; overflow: hidden }
            </style>
        </head>
        <body>
            <div class="canvas-container">
                ${htmlElementsSerialized}
            </div>
        </body>
        </html>
    `;
};

export const canvasToHTML = (canvas: any): string => {
  const objects = canvas.getObjects();
  let htmlElements = "";
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  objects.forEach((obj: any) => {
    const canvasType: CanvasElement = obj.type;
    const serializerFunction = CANVAS_ELEMENT_SERIALIZER_FUNCTIONS[canvasType];
    htmlElements += serializerFunction(obj);
  });

  return getFinalHTMLSerialized(canvasWidth, canvasHeight, htmlElements);
};
