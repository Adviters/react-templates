export const readImage = (values: any, onload: any) => {
  const file = values.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = (e) => {
    const imgElement = new Image();
    imgElement.src = e.target?.result as string;

    imgElement.onload = () => {
      onload();
    };
  };

  reader.readAsDataURL(file);
};
