export const canvasToHTML = (canvas: any): string => {
  const objects = canvas.getObjects();
  let htmlElements = "";
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;

  objects.forEach((obj: any) => {
    const left = obj.left;
    const top = obj.top;

    if (obj.type === "textbox") {
      htmlElements += `
                <div style="
                    position: absolute; 
                    width: ${obj.width}px;
                    left: ${left}px; 
                    top: ${top}px; 
                    font-size: ${obj.fontSize}px; 
                    font-family: ${obj.fontFamily}; 
                    font-style: ${obj.fontStyle};
                    font-weight: ${
                      obj.fontWeight === "bold" ? "bold" : "normal"
                    };
                    text-decoration: ${obj.underline ? "underline" : "none"};
                    color: ${obj.fill};">
                    ${obj.text}
                </div>
            `;
    } else if (obj.type === "image") {
      htmlElements += `
                <img src="${obj.toDataURL()}" style="
                    position: absolute; 
                    left: ${left}px; 
                    top: ${top}px; 
                    width: ${obj.width * obj.scaleX}px;
                    height: ${obj.height * obj.scaleY}px;">
            `;
    } else if (obj.type === "rect") {
      htmlElements += `
                <div style="
                    position: absolute; 
                    left: ${left}px; 
                    top: ${top}px; 
                    width: ${obj.width * obj.scaleX}px; 
                    height: ${obj.height * obj.scaleY}px; 
                    background: ${obj.fill}; 
                    border: ${obj.strokeWidth}px solid ${obj.stroke}; 
                    transform: rotate(${obj.angle}deg);">
                </div>
            `;
    } else if (obj.type === "circle") {
      htmlElements += `
                <div style="
                    position: absolute; 
                    left: ${left}px; 
                    top: ${top}px; 
                     width: ${obj.width * obj.scaleX}px; 
                    height: ${obj.height * obj.scaleY}px; 
                    background: ${obj.fill}; 
                    border-radius: 50%; 
                    border: ${obj.strokeWidth}px solid ${obj.stroke}; 
                    transform: rotate(${obj.angle}deg);">
                </div>
            `;
    } else if (obj.type === "triangle") {
      htmlElements += `
                <div style="
                    position: absolute; 
                    left: ${left}px; 
                    top: ${top}px; 
                    width: 0;
                    height: 0;
                    border-left: ${obj.width / 2}px solid transparent;
                    border-right: ${obj.width / 2}px solid transparent;
                    border-bottom: ${obj.height}px solid ${obj.fill}; 
                    transform: rotate(${obj.angle}deg);">
                </div>
            `;
    } else if (obj.type === "line") {
      const { left, top, x1, y1, x2, y2, strokeWidth, stroke } = obj;
      const width = Math.abs(x2 - x1);
      const height = Math.abs(y2 - y1);
      const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

      htmlElements += `
                <div style="
                    position: absolute;
                    left: ${left}px; 
                    top: ${top}px;
                    width: ${width}px; 
                    height: ${height}px; 
                    border-top: ${strokeWidth} solid ${stroke};
                    transform: rotate(${angle}deg);
                    transform-origin: 0 0;
                    border-top: ${strokeWidth}px solid ${stroke};">
                </div>
            `;
    }
  });

  const htmlContent = `
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
                ${htmlElements}
            </div>
        </body>
        </html>
    `;

  return htmlContent;
};
