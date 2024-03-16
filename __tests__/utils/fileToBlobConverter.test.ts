import { fileToBlobConverter } from "../../utils/fileToBlobConverter";

const mockFileReaderInstance = {
    onload: jest.fn(),
    readAsArrayBuffer: jest.fn()
};
(global as any).FileReader = jest.fn(() => mockFileReaderInstance);
(global as any).Blob = jest.fn();

describe('fileToBlobConverter function', () => {
    it('should convert a valid image file to a blob and invoke the callback with the blob', () => {
        const mockFile = new File(['test content'], 'test.jpg', { type: 'image/jpeg' });
        const mockCallback = jest.fn();

        fileToBlobConverter(mockFile, mockCallback);

        const mockResult = 'mock result';
        const mockEvent = { target: { result: mockResult } };
        mockFileReaderInstance.onload(mockEvent);

        expect(mockFileReaderInstance.readAsArrayBuffer).toHaveBeenCalledTimes(1);
        expect(mockFileReaderInstance.readAsArrayBuffer).toHaveBeenCalledWith(mockFile);

        expect(global.Blob).toHaveBeenCalledTimes(1);
        expect(global.Blob).toHaveBeenCalledWith([mockResult]);

        expect(mockCallback).toHaveBeenCalledTimes(1);
        expect(mockCallback).toHaveBeenCalledWith(expect.any(Blob));
    });

});
