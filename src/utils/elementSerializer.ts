export const canvasTextboxToHTML = (canvasText: any): string => {
  const {
    left,
    top,
    width,
    fontSize,
    fontFamily,
    fontStyle,
    fontWeight,
    angle,
    scaleY,
    underline,
    fill,
    text,
  } = canvasText;
  return `
    <div style="
        position: absolute; 
        width: ${width}px;
        left: ${left}px; 
        top: ${top}px; 
        font-size: ${fontSize}px; 
        font-family: ${fontFamily}; 
        font-style: ${fontStyle};
        font-weight: ${fontWeight === "bold" ? "bold" : "normal"};
        transform-origin: 0 0;
        transform: rotate(${angle}deg) scaleY(${scaleY});
        text-decoration: ${underline ? "underline" : "none"};
        color: ${fill};">
        ${text}
    </div>
  `;
};

export const canvasImageToHTML = (canvasImage: any): string => {
  const { left, top, width, scaleX, angle, height, scaleY } = canvasImage;
  return `
                <img src="${canvasImage.toDataURL()}" style="
                    position: absolute; 
                    left: ${left}px; 
                    top: ${top}px; 
                    width: ${width * scaleX}px;
                    transform-origin: 0 0;
                    transform: rotate(${angle}deg);
                    height: ${height * scaleY}px;">
            `;
};

export const canvasRectangleToHTML = (canvasRectangle: any): string => {
  const {
    left,
    top,
    width,
    scaleX,
    height,
    scaleY,
    fill,
    strokeWidth,
    stroke,
    angle,
  } = canvasRectangle;
  return `
                <div style="
                    position: absolute; 
                    left: ${left}px; 
                    top: ${top}px; 
                    width: ${width * scaleX}px; 
                    height: ${height * scaleY}px; 
                    background: ${fill}; 
                    border: ${strokeWidth}px solid ${stroke}; 
                    transform-origin: 0 0;
                    transform: rotate(${angle}deg);">
                </div>
            `;
};

export const canvasCircleToHTML = (canvasCircle: any): string => {
  const {
    left,
    top,
    width,
    scaleX,
    height,
    scaleY,
    fill,
    strokeWidth,
    stroke,
    angle,
  } = canvasCircle;
  return `
                <div style="
                    position: absolute; 
                    left: ${left}px; 
                    top: ${top}px; 
                     width: ${width * scaleX}px; 
                    height: ${height * scaleY}px; 
                    background: ${fill}; 
                    border-radius: 50%; 
                    border: ${strokeWidth}px solid ${stroke};
                    transform-origin: 0 0;
                    transform: rotate(${angle}deg);">
                </div>
            `;
};

export const canvasTriangleToHTML = (canvasTriangle: any): string => {
  const { left, top, width, height, fill, angle, scaleX, scaleY } =
    canvasTriangle;
  return `
    <div style="
        position: absolute; 
        left: ${left}px; 
        top: ${top}px; 
        width: 0;
        height: 0;
        border-left: ${width / 2}px solid transparent;
        border-right: ${width / 2}px solid transparent;
        border-bottom: ${height}px solid ${fill};
        transform-origin: 0 0;
        transform: rotate(${angle}deg) scaleX(${scaleX}) scaleY(${scaleY});">
    </div>
  `;
};

export const canvasLineToHTML = (canvasLine: any): string => {
  const { width, left, top, strokeWidth, stroke, angle, scaleX, scaleY } =
    canvasLine;
  return `
                <div style="
                    position: absolute;
                    left: ${left}px; 
                    top: ${top}px;
                    width: ${width * scaleX}px; 
                    height: ${scaleY * strokeWidth}px; 
                    border-top: ${strokeWidth} solid ${stroke};
                    transform: rotate(${angle}deg);
                    transform-origin: 0 0;
                    background-color: ${stroke};">
                    
                </div>
            `;
};
