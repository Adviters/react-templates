// src/DragItem.js
import { Box, Tooltip } from "@mui/material";
import { useDrag } from "react-dnd";

interface IDragItemProps {
  type: string;
  label: string;
  icon?: any;
}

const DragItem = ({ type, label, icon }: IDragItemProps) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { type },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Box
      ref={drag as any}
      sx={{ cursor: "move", opacity: isDragging ? 0.5 : 1 }}
    >
      <Tooltip
        title={label}
        //placement="right"
        arrow
        slotProps={{
          popper: {
            modifiers: [
              {
                name: "offset",
                options: {
                  offset: [0, -14],
                },
              },
            ],
          },
        }}
      >
        <Box
          sx={{
            padding: "10px",
            margin: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",

            display: "flex",
            alignItems: "center",
            maxWidth: "1.5rem",
          }}
        >
          {icon}
        </Box>
      </Tooltip>
    </Box>
  );
};

export default DragItem;
