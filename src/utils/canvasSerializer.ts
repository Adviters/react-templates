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
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const svgOutput = canvas.toSVG();
  return getFinalHTMLSerialized(canvasWidth, canvasHeight, svgOutput);
};
