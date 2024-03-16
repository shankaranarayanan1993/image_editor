'use client'
import { IHomeContxt, IHomeContxtProvider } from '@/types/homeContxt';
import { useRouter } from 'next/navigation';
import { createContext, useState } from 'react';

const DEFAULT_IMAGE = "/demo-image.jpeg"
const DUMMMY_IMAGES = [DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE, DEFAULT_IMAGE]

export const HomeContxt = createContext<IHomeContxt>({
    savedImages: [],
    importedImage: null,
    imagesHandler: () => { },
    importedImageHandler: () => { }
});

const HomeContxtProvider = ({ children }: IHomeContxtProvider) => {

    const { push } = useRouter();
    const [importedImage, setImportedImage] = useState()
    const [savedImages, setSavedImages] = useState<any>(DUMMMY_IMAGES);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    const imagesHandler = (data: any) => {
        setSavedImages((preState: any) => {
            let newItems = preState;
            newItems[currentImageIndex] = data;
            return newItems;
        })
        setCurrentImageIndex(preState => preState === 5 ? 0 : preState + 1);
        push('/')
    }

    const importedImageHandler = (data: any) => {
        console.log({ data })
        setImportedImage(data);

        const blobs = [data, data, data, data, data, data].map(item => URL.createObjectURL(item))
        setSavedImages(blobs);
    }

    return (
        <HomeContxt.Provider value={{ savedImages, imagesHandler, importedImageHandler, importedImage }}>
            {children}
        </HomeContxt.Provider>
    );
}

export default HomeContxtProvider;