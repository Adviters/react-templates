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
    <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
      <Button variant="outlined" onClick={handleOnPreview}>
        Previsualizar HTML
      </Button>
      <Button variant="contained" onClick={handleOnExport}>
        Exportar HTML
      </Button>
    </Stack>
  );
};

export default CanvasOutputActions;
