'use client'
import { IHomeContxt, IHomeContxtProvider } from '@/types/homeContxt';
import base64ToImage from '@/utils/base64ToImage';
import { createContext, useState } from 'react';

const DEFAULT_IMAGE = "/demo-image.jpeg"
const DUMMMY_IMAGES = [DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE]

export const HomeContxt = createContext<IHomeContxt>({
    savedImages: [],
    imagesHandler: () => { }
});

const HomeContxtProvider = ({ children }: IHomeContxtProvider) => {
    const [savedImages, setSavedImages] = useState<any>(DUMMMY_IMAGES);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    const imagesHandler = (data: any) => {
        const img = base64ToImage(data);
        setSavedImages([img, ...savedImages])
        setCurrentImageIndex(preState => preState + 1);
    }

    return (
        <HomeContxt.Provider value={{ savedImages, imagesHandler }}>
            {children}
        </HomeContxt.Provider>
    );
}

export default HomeContxtProvider;