import createBlog from "../../utils/createBlog";

const mockBlob = jest.fn(() => Promise.resolve('Test blob'));

(global.fetch as jest.Mock) = jest.fn(() =>
    Promise.resolve({
        blob: mockBlob,
    })
);

describe('createBlog function', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should fetch a blob successfully', async () => {
        const filePath = 'test_file_path';
        const result = await createBlog(filePath);
        expect(fetch).toHaveBeenCalledWith(filePath);
        expect(result).toBe('Test blob');
    });

    it('should handle errors gracefully', async () => {
        (global.fetch as jest.Mock).mockRejectedValueOnce('Fetch error');
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
        const filePath = 'test_file_path';
        const result = await createBlog(filePath);
        expect(fetch).toHaveBeenCalledWith(filePath);
        expect(result).toBe(null);
        expect(consoleSpy).toHaveBeenCalledWith('Error while generating blob', 'Fetch error');
        consoleSpy.mockRestore();
    });


});
