'use client'
import { useContext, useState } from "react";
import CreativeEditorSDKWithNoSSR from "../ceSdk";
import Header from "../header";
import Card from "./card";
import { Grid, Box } from '@mui/material';
import { HomeContxt } from "@/data/homeContxt";

const Home = () => {

    const [image, setImage] = useState<File>();
    const { savedImages } = useContext(HomeContxt);

    const imageHandler = (file: File) => {
        setImage(file)
    }

    return (
        <>
            <Header imageHandler={imageHandler} />
            <Grid container spacing={2}>
                {savedImages?.map((item: any, index: number) => (
                    <Card key={index} item={item} />
                ))}
            </Grid>
            <Box sx={{ marginTop: '20px' }}>
                <CreativeEditorSDKWithNoSSR image={image} />
            </Box>
        </>
    );
}

export default Home;