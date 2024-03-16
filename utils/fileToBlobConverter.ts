export const fileToBlobConverter = (file: File, callback: (blob: any) => void) => {
    if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const blob = new Blob([event.target?.result as ArrayBuffer]);
            callback(blob)
        };
        reader.readAsArrayBuffer(file);
    }
};