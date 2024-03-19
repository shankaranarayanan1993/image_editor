import removeImageBackground from "@/utils/removeImageBackground";

jest.mock('@imgly/background-removal', () => ({
    __esModule: true,
    default: jest.fn().mockResolvedValue(new Blob(['Background removed image'], { type: 'image/png' }))
}));

describe('removeImageBackground function', () => {
    const mockCreateObjectURL = jest.fn().mockReturnValue('mocked-object-url');
    URL.createObjectURL = mockCreateObjectURL;

    it('returns object URL of the background removed image', async () => {
        const blob = new Blob(['Test image'], { type: 'image/png' });
        const objectURL = await removeImageBackground(blob);
        expect(objectURL).toBe('mocked-object-url');
        expect(require('@imgly/background-removal').default).toHaveBeenCalledWith(blob);
    });
});
