import { HomeContxt } from '@/data/homeContxt';
import dynamic from 'next/dynamic'
import { useContext } from 'react';

interface Props {
    image?: File
}
const CreativeEditorSDKWithNoSSR = ({ image }: Props) => {
    console.log('CreativeEditorSDKWithNoSSR image',image)

    const { imagesHandler } = useContext(HomeContxt);

    let config = {
        license: process.env.NEXT_PUBLIC_LICENSE,
        baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.22.0/assets',
        callbacks: {
            onBack: () => {
                window.alert('Back callback!');
            },
            onClose: () => {
                window.alert('Close callback!');
            },
            onSave: (scene: any) => {
                window.alert('Save callback!');
                // imagesHandler(scene);
            },
            onLoad: () => {
                window.alert('Load callback!');
                const scene = '...'; // Fill with sene
                return Promise.resolve(scene);
            },
            onExport: (blobs: any, options: any) => {
                window.alert('Export callback!');
                console.info(options.mimeType);
                console.info(options.jpegQuality);
                console.info(options.pages);
                return Promise.resolve();
            }
        },
        ui: {
            elements: {
                navigation: {
                    action: {
                        close: true,
                        back: true,
                        save: true,
                        load: true,
                        export: true
                    }
                }
            }
        }
    };

    const CeSDKwithNoSSR = dynamic(() => import('./creativeEditorSDK'), {
        ssr: false
    })

    return <CeSDKwithNoSSR image={image} config={config} />
}

export default CreativeEditorSDKWithNoSSR;