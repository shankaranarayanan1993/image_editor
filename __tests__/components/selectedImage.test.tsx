import SelectedImage from '@/components/home/selectedImage';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('SelectedImage component', () => {
    it('renders with the provided image', () => {
        const testImage = '/test-image.jpg';
        const { getByAltText } = render(<SelectedImage image={testImage} />);
        const imageElement = getByAltText('Profile');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('src')).toContain('test-image.jpg');
    });

    it('renders with default image when no image prop is provided', () => {
        const { getByAltText } = render(<SelectedImage image="" />);
        const imageElement = getByAltText('Profile');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('src')).toContain('demo-image.jpeg');
    });
});
