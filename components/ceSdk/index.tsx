import dynamic from 'next/dynamic'

interface Props {
    image?: File
}
const CreativeEditorSDKWithNoSSR = ({ image }: Props) => {

    let config = {
        license: process.env.NEXT_PUBLIC_LICENSE,
        baseURL: 'https://cdn.img.ly/packages/imgly/cesdk-js/1.22.0/assets',
    };

    const CeSDKwithNoSSR = dynamic(() => import('./creativeEditorSDK'), {
        ssr: false
    })

    return <CeSDKwithNoSSR image={image} config={config} />
}

export default CreativeEditorSDKWithNoSSR;