import { useDrop } from "react-dnd";
import { DROP_ITEMS } from "../constants/dropItems.constants";

export const useDnD = ({ canvas, setOpen }: { canvas: any; setOpen: any }) => {
  const handleDrop = (item: { type: string }) => {
    const { type } = item;
    if (type === "image") setOpen(true);
    else {
      const obj = (DROP_ITEMS as any)[type]();

      if (obj) {
        canvas.add(obj);
      }
    }
  };

  const [_, drop] = useDrop({
    accept: [...Object.keys(DROP_ITEMS), "image"],
    drop: (item: { type: string }) => handleDrop(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return { handleDrop, drop };
};
