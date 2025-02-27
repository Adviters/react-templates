import { useDrop } from "react-dnd";
import { DROP_ITEMS } from "../constants/dropItems.constants";

export const useDnD = ({ canvas, setOpen }: { canvas: any; setOpen: any }) => {
  const handleDrop = (item: { type: string }, monitor: any) => {
    const { type } = item;
    if (type === "image") setOpen(true);
    else {
      const obj = (DROP_ITEMS as any)[type]();

      if (obj) {
        const clientOffset = monitor.getClientOffset();
        if (clientOffset) {
          const pointer = canvas.getPointer({
            clientX: clientOffset.x,
            clientY: clientOffset.y,
          });
          obj.set({ left: pointer.x, top: pointer.y });
        }
        canvas.add(obj);
      }
    }
  };

  const [_, drop] = useDrop({
    accept: [...Object.keys(DROP_ITEMS), "image"],
    drop: (item: { type: string }, monitor) => handleDrop(item, monitor),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return { handleDrop, drop };
};
