import { Menu, MenuItem } from "@mui/material";

const CustomZIndexHandler = ({
  canvas,
  anchorEl,
  handleClose,
  open,
}: {
  canvas: any;
  open: boolean;
  handleClose: any;
  anchorEl: any;
}) => {
  const handleZIndex = (method: any) => {
    const obj = canvas.getActiveObject();
    obj && canvas[method](obj);
  };
  return (
    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
      <MenuItem onClick={() => handleZIndex("bringObjectForward")}>
        Mover adelante
      </MenuItem>
      <MenuItem onClick={() => handleZIndex("bringObjectToFront")}>
        Traer al frente
      </MenuItem>
      <MenuItem onClick={() => handleZIndex("sendObjectBackwards")}>
        Mover atrás
      </MenuItem>
      <MenuItem onClick={() => handleZIndex("sendObjectToBack")}>
        Enviar al fondo
      </MenuItem>
    </Menu>
  );
};

export default CustomZIndexHandler;
