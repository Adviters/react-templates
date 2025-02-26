import React from "react";

import { Backdrop, Box, Fade, Modal } from "@mui/material";

import { STYLES } from "./styles";

type CustomModalProps = {
  isOpen: boolean;
  handleOnClose: VoidFunction;
  children: React.ReactElement;
};

const CustomModal = ({ isOpen, handleOnClose, children }: CustomModalProps) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleOnClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={isOpen}>
        <Box sx={STYLES.modalContainer}>{children}</Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
