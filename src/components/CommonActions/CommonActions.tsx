import { IconButton, Paper, Tooltip } from "@mui/material";
import CustomAddLink from "../CustomAddLink/CustomAddLink";
import { useState } from "react";
import { FilterNone, LinkRounded } from "@mui/icons-material";
import CustomZIndexHandler from "../CustomZIndexHandler/CustomZIndexHandler";

const CommonActions = ({ canvas }: { canvas: any }) => {
  const [openLink, setOpenLink] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openZIndex = Boolean(anchorEl);
  const handleOpenZIndex = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseZIndex = () => {
    setAnchorEl(null);
  };

  return (
    <Paper elevation={0} sx={{ display: "flex" }}>
      <Tooltip title="Agregar hipervínculo">
        <IconButton onClick={() => setOpenLink(true)}>
          <LinkRounded />
        </IconButton>
      </Tooltip>
      <Tooltip title="Cambiar orden">
        <IconButton onClick={handleOpenZIndex}>
          <FilterNone />
        </IconButton>
      </Tooltip>
      <CustomZIndexHandler
        anchorEl={anchorEl}
        canvas={canvas}
        handleClose={handleCloseZIndex}
        open={openZIndex}
      />
      <CustomAddLink canvas={canvas} open={openLink} setOpen={setOpenLink} />
    </Paper>
  );
};

export default CommonActions;
