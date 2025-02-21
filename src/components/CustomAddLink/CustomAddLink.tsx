import { Box, Button, Modal, Typography } from "@mui/material";
import { Field, Form } from "react-final-form";
import CustomTextField from "../CustomTextField/CustomTextField";

const CustomAddLink = ({
  open,
  setOpen,
  canvas,
}: {
  open: boolean;
  setOpen: any;
  canvas: any;
}) => {
  const handleAddLink = (values: any) => {
    if (!values) return;

    const objectSelected = canvas.getActiveObject();
    objectSelected &&
      objectSelected.on("mousedblclick", () => {
        window.open(values.url, "_blank"); // Redirigir a la URL cuando se hace clic en la imagen
      });

    setOpen(false);
  };
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Form
          onSubmit={handleAddLink}
          render={({ handleSubmit }) => (
            <>
              <Typography
                sx={{ marginBottom: 1, fontWeight: 500, fontSize: "18px" }}
              >
                Añadir hipervínculo
              </Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Field
                  name="url"
                  component={CustomTextField}
                  label="Link"
                  sx={{ width: 300 }}
                />
                <Button
                  variant="contained"
                  sx={{ marginLeft: 2, height: 55 }}
                  onClick={handleSubmit}
                >
                  Guardar
                </Button>
              </Box>
            </>
          )}
        />
      </Box>
    </Modal>
  );
};

export default CustomAddLink;
