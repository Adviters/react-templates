import { Button, Stack } from "@mui/material";

type CanvasOutputActionsProps = {
  handleOnExport: VoidFunction;
  handleOnPreview: VoidFunction;
};

const CanvasOutputActions = ({
  handleOnExport,
  handleOnPreview,
}: CanvasOutputActionsProps) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" onClick={handleOnExport}>
        Exportar HTML
      </Button>
      <Button variant="contained" color="secondary" onClick={handleOnPreview}>
        Preview HTML
      </Button>
    </Stack>
  );
};

export default CanvasOutputActions;
