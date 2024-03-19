"use client";
import CreativeEditorSDK from "@cesdk/cesdk-js";
import { useCallback, useEffect, useRef } from "react";

interface Props {
  config: any;
  image?: string;
}
const CeSdk = ({ image, config }: Props) => {
  console.log("CeSdk image", image);
  const cesdk_container = useRef(null);

  const initialiseContainer = useCallback((sdk: any) => {
    CreativeEditorSDK.create(sdk, config).then(async (instance) => {
      const callbackHandler = async (image: string) => {
        await instance.createFromImage(image);
      };
      try {
        if (image) {
          callbackHandler(image);
        }
      } catch (error) {
        console.error("Error processing image:", error);
      }
    });
  }, [image, config]);

  useEffect(() => {
    if (cesdk_container.current) {
      initialiseContainer(cesdk_container.current);
    }
    return () => {
      cesdk_container.current = null;
    };
  }, [config, image, initialiseContainer]);

  return (
    <div ref={cesdk_container} style={{ width: "100%", height: "400px" }}></div>
  );
};

export default CeSdk;
