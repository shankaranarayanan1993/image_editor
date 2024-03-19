import Card from '@/components/home/card';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe('Card component', () => {
    it('renders with the provided image', () => {
        const testImage = '/test-image.jpg';
        const { getByAltText } = render(<Card image={testImage} />);
        const imageElement = getByAltText('Profile');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('src')).toContain('test-image.jpg');
    });

    it('renders with default image when no image prop is provided', () => {
        const { getByAltText } = render(<Card image="" />);
        const imageElement = getByAltText('Profile');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement.getAttribute('src')).toContain('placeholder.png');
    });
});
