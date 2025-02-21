import { Box } from "@mui/material";
import DragItem from "../CustomDragItem/CustomDragItem";
import {
  ChangeHistory,
  Circle,
  Image,
  Rectangle,
  ShowChart,
  Title,
} from "@mui/icons-material";

const Sidebar = () => {
  return (
    <Box>
      <DragItem type="text" label="Texto" icon={<Title />} />
      <DragItem type="image" label="Imagen" icon={<Image />} />
      <DragItem type="line" label="Linea" icon={<ShowChart />} />

      <DragItem type="circle" label="Círculo" icon={<Circle />} />
      <DragItem type="rect" label="Rectángulo" icon={<Rectangle />} />
      <DragItem type="triangle" label="Triángulo" icon={<ChangeHistory />} />
    </Box>
  );
};

export default Sidebar;
