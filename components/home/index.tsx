'use client'
import { useEffect, useState } from "react";
import Header from "./header";
import Card from "./card";
import { Grid, Box } from '@mui/material';
import CreativeEditorSDKWithNoSSR from "../ceSdk";
import removeImageBackground from "@/utils/removeImageBackground";
import createBlog from "@/utils/createBlog";

const DEFAULT_ARRAY = ["", "", "", "", "", ""];

const Home = () => {

    const [importedImage, setImportedImage] = useState<any>();
    const [bgRemovedImage, setBgRemovedImage] = useState<any>();
    const [savedImages, setSavedImages] = useState<any>(DEFAULT_ARRAY);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    const resetHandler = () => {
        setBgRemovedImage(null);
        setSavedImages((preState: any) => preState.map((item: string) => ""));
        setCurrentImageIndex(0);
    }

    const imageExportHandler = (data: any) => {
        setSavedImages((preState: any) => {
            let newItems = preState;
            newItems[currentImageIndex] = data;
            return newItems;
        })
        setCurrentImageIndex(preState => preState === 5 ? 0 : preState + 1);
    }

    const imageUploadHandler = async (data: any) => {
        resetHandler();
        setImportedImage(URL.createObjectURL(data));
        const objectUrl = await removeImageBackground(data);
        setBgRemovedImage(objectUrl);
    }

    const demoImageHandler = async () => {
        const blob = await createBlog('/demo-image.jpeg');
        const objectUrl = await removeImageBackground(blob);
        setBgRemovedImage(objectUrl)
    }

    useEffect(() => {
        demoImageHandler();
    }, [])

    return (
        <>
            <Header imageHandler={imageUploadHandler} image={importedImage} />

            <Box sx={{ marginTop: '20px' }}>
                <CreativeEditorSDKWithNoSSR image={bgRemovedImage} imageExportHandler={imageExportHandler} />
            </Box>

            <Box sx={{
                marginTop: "2%",
                marginBottom: '2%',
                fontSize: '20px',
                fontWeight: '700'
            }}>Output of image editor</Box>
            <Grid container spacing={0} sx={{ marginTop: '20px' }}>
                {savedImages?.map((item: any, index: number) => (
                    <Card key={index + item} item={item} />
                ))}
            </Grid>
        </>
    );
}

export default Home;