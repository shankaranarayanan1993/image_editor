import { ReactNode } from "react";


export interface IHomeContxtProvider {
    children: ReactNode
}

export interface IHomeContxt {
    savedImages: any,
    imagesHandler: (data: any) => void
}