import { canvasToHTML } from "./canvasSerializer";

export const exportCanvasToStaticHTML = (canvas: any): void => {
  const htmlContent: string = canvasToHTML(canvas);
  const blob = new Blob([htmlContent], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "exportado.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
