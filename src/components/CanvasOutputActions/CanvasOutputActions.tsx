import { Button, Stack } from "@mui/material";

type CanvasOutputActionsProps = {
  handleOnExport: VoidFunction;
  handleOnPreview: VoidFunction;
  handleOnSave?: VoidFunction;
};

const CanvasOutputActions = ({
  handleOnExport,
  handleOnPreview,
  handleOnSave,
}: CanvasOutputActionsProps) => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"flex-end"}>
      <Button variant="outlined" onClick={handleOnPreview}>
        Previsualizar HTML
      </Button>
      <Button variant="contained" onClick={handleOnExport}>
        Exportar HTML
      </Button>
      {handleOnSave && (
        <Button variant="contained" onClick={handleOnSave}>
          Guardar
        </Button>
      )}
    </Stack>
  );
};

export default CanvasOutputActions;
