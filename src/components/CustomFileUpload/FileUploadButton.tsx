import { Image } from "@mui/icons-material";
import { Tooltip, IconButton } from "@mui/material";
import { useState } from "react";
import CustomFileUpload from "./CustomFileUpload";

const FileUploadButton = ({
  handleUploadImage,
}: {
  handleUploadImage: (values: any) => void;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip title="Cambiar imagen">
        <IconButton onClick={() => setOpen(true)}>
          <Image />
        </IconButton>
      </Tooltip>
      <CustomFileUpload
        open={open}
        setOpen={setOpen}
        handleUploadImage={handleUploadImage}
      />
    </>
  );
};

export default FileUploadButton;
