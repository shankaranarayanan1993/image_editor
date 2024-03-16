import { HomeContxt } from '@/data/homeContxt';
import dynamic from 'next/dynamic'
import { useContext } from 'react';

interface Props {
    image?: File
}
const CreativeEditorSDKWithNoSSR = ({ image }: Props) => {
    console.log('CreativeEditorSDKWithNoSSR image', image)

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
                console.log({ scene })
            },
            onLoad: () => {
                window.alert('Load callback!');
                const scene = '...';
                return Promise.resolve(scene);
            },
            onExport: (blobs: any, options: any) => {
                const url = URL.createObjectURL(blobs[0]);
                imagesHandler(url)
            }
        },
        ui: {
            elements: {
                navigation: {
                    action: {
                        close: false,
                        back: false,
                        save: false,
                        load: false,
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