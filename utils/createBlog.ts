const createBlog = async (filePath: string) => {
  try {
    const blob = await fetch(filePath).then((response) => response.blob());
    return blob;
  } catch (e) {
    console.log("Error while generating blob", e);
    return null;
  }
};

export default createBlog;
