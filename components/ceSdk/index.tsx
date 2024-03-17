import dynamic from "next/dynamic";

interface Props {
  image?: string;
  imageExportHandler: (image: string) => void;
}
const CreativeEditorSDKWithNoSSR = ({ image, imageExportHandler }: Props) => {
  let config = {
    license: process.env.NEXT_PUBLIC_LICENSE,
    baseURL: "https://cdn.img.ly/packages/imgly/cesdk-js/1.22.0/assets",
    callbacks: {
      onExport: (blobs: Blob[]) => {
        const url = URL.createObjectURL(blobs[0]);
        imageExportHandler(url);
      },
    },
    ui: {
      elements: {
        navigation: {
          action: {
            export: {
              show: true,
              format: ["image/png"],
            },
          },
        },
      },
    },
  };

  const CeSDKwithNoSSR = dynamic(() => import("./creativeEditorSDK"), {
    ssr: false,
  });

  return <CeSDKwithNoSSR image={image} config={config} />;
};

export default CreativeEditorSDKWithNoSSR;
