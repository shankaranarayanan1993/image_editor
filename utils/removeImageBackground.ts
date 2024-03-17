import imglyRemoveBackground from "@imgly/background-removal";
const removeImageBackground = async (blob: any) => {
  try {
    return imglyRemoveBackground(blob).then((res: Blob) => {
      const objectURL = URL.createObjectURL(res);
      return objectURL;
    });
  } catch (e) {
    console.log("Error while getting object url", e);
    return null;
  }
};

export default removeImageBackground;
