export const fileToBlobConverter = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error("No file provided"));
      return;
    }
    const blob = new Blob([file], { type: file.type });
    resolve(blob);
  });
};
