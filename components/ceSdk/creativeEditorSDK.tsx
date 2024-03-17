'use client';
import CreativeEditorSDK from '@cesdk/cesdk-js';
import { useEffect, useRef } from 'react';
import createBlog from '../../utils/createBlog';
import { fileToBlobConverter } from '../../utils/fileToBlobConverter';
import removeImageBackground from '../../utils/removeImageBackground';

interface Props {
    config: any
    image?: File
}
const CeSdk = ({ image, config }: Props) => {
    console.log('CeSdk image',image)
    const cesdk_container = useRef(null);

    useEffect(() => {
        if (cesdk_container.current) {
            CreativeEditorSDK.create(cesdk_container.current, config).then(
                async (instance) => {

                    const callbackHandler = async (blob: any) => {
                        const objectUrl = await removeImageBackground(blob);
                        // const objectUrl = URL.createObjectURL(blob);
                        objectUrl && await instance.createFromImage(objectUrl);

                    }

                    let blob;
                    try {
                        if (image) {
                            blob = await fileToBlobConverter(image);
                        } else {
                            blob = await createBlog('/demo-image.jpeg');
                        }
                        if (blob) {
                            callbackHandler(blob);
                        }
                    } catch (error) {
                        console.error('Error processing image:', error);
                    }
                   
                }
            );
        }

        return () => {
            cesdk_container.current = null;
        }
    }, [config, image]);


    return (
        <div
            ref={cesdk_container}
            style={{ width: '100%', height: '600px' }}
        ></div>
    );
};


export default CeSdk;
