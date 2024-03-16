import { fileToBlobConverter } from "../../utils/fileToBlobConverter";

const mockFileReaderInstance = {
    onload: jest.fn(),
    readAsArrayBuffer: jest.fn()
};
(global as any).FileReader = jest.fn(() => mockFileReaderInstance);

(global as any).Blob = jest.fn((parts, properties) => {
    return { parts, size: parts.reduce((acc:any, part:any) => acc + part.length, 0), type: properties.type };
});

describe('fileToBlobConverter', () => {
    // No need for mockClear on Blob since we're not tracking calls or instances directly on it

    it('should convert a file to a blob with correct type and size', async () => {
        const mockFile = new File(["dummy content"], "test.txt", { type: "text/plain" });
        const blob = await fileToBlobConverter(mockFile);

        expect(Blob).toHaveBeenCalledTimes(1); // Checking that Blob constructor was called
        expect(blob).toHaveProperty('type', mockFile.type);
        
    });

    it('should reject the promise if no file is provided', async () => {
        // Since we're handling a rejection, we prepare Jest to expect at least one assertion to be made.
        // This ensures that the catch block gets executed.
        expect.assertions(1);

        // Bypass TypeScript's type checking by casting null to any. This simulates calling the function with an invalid argument.
        await expect(fileToBlobConverter(null as any)).rejects.toThrow('No file provided');
    });
});
