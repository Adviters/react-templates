import { Box, Button, Modal } from "@mui/material";
import { Form } from "react-final-form";
import FileField from "../CustomFileInput/CustomFileInput";

const CustomFileUpload = ({
  open,
  setOpen,
  handleUploadImage,
}: {
  open: boolean;
  setOpen: any;
  handleUploadImage: (values: any) => void;
}) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Form
          onSubmit={handleUploadImage}
          render={({ handleSubmit }) => (
            <Box
              display={"flex"}
              sx={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FileField name="files" />
              <Button
                type="submit"
                variant="contained"
                sx={{ marginTop: 2 }}
                onClick={handleSubmit}
              >
                Insertar
              </Button>
            </Box>
          )}
        />
      </Box>
    </Modal>
  );
};

export default CustomFileUpload;
