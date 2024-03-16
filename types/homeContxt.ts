import { ReactNode } from "react";


export interface IHomeContxtProvider {
    children: ReactNode
}

export interface IHomeContxt {
    savedImages: any;
    importedImage: any;
    imagesHandler: (data: any) => void
    importedImageHandler: (data: any) => void
}