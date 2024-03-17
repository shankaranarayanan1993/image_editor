'use client';
import CreativeEditorSDK from '@cesdk/cesdk-js';
import { useEffect, useRef } from 'react';

interface Props {
    config: any
    image?: any
}
const CeSdk = ({ image, config }: Props) => {
    console.log('CeSdk image', image)
    const cesdk_container = useRef(null);

    useEffect(() => {
        if (cesdk_container.current) {
            CreativeEditorSDK.create(cesdk_container.current, config).then(
                async (instance) => {

                    const callbackHandler = async (image: any) => {
                        await instance.createFromImage(image);
                    }

                    try {
                        if (image) {
                            callbackHandler(image);
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
            style={{ width: '100%', height: '400px' }}
        ></div>
    );
};


export default CeSdk;
