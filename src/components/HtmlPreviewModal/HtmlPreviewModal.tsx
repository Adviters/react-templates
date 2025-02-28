import CustomModal from "../CustomModal/CustomModal";

type HtmlPreviewModalProps = {
  previewOutput: string | undefined;
  handleClose: VoidFunction;
  width?: number;
  height?: number;
};

const getIFrameStyle = (width: number, height: number) => {
  return { width: `${width}px`, height: `${height}px`, border: "none" };
};

const HtmlPreviewModal = ({
  previewOutput,
  handleClose,
  width = 1000,
  height = 600,
}: HtmlPreviewModalProps) => {
  const showModal: boolean = Boolean(previewOutput);
  if (!showModal) return null;
  return (
    <CustomModal isOpen={showModal} handleOnClose={handleClose}>
      <iframe
        srcDoc={previewOutput}
        style={getIFrameStyle(width + 2, height + 2)}
      />
    </CustomModal>
  );
};

export default HtmlPreviewModal;
