export const handleFormatChange = (canvas: any, key: string, value: any) => {
  if (value === null) return;

  const obj = canvas.getActiveObject();
  obj &&
    obj.set({
      [key]: key === "strokeWidth" ? parseInt(value) : value,
    });
  canvas.fire("object:modified", { target: obj });

  canvas.renderAll();
};
