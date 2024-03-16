'use client'
import { Fragment, useState } from "react";
import CreativeEditorSDKWithNoSSR from "../ceSdk";
import Header from "../header";
import Card from "./card";
import { Grid, Box } from '@mui/material';

const Home = () => {

    const [image, setImage] = useState<File>();

    const imageHandler = (file: File) => {
        setImage(file)
    }

    return (
        <Fragment>
            <Header imageHandler={imageHandler} />
            <Grid container spacing={2}>
                {[...Array(6)].map((_, index) => (
                    <Card key={index} />
                ))}
            </Grid>
            <Box sx={{ marginTop: '20px' }}>
                <CreativeEditorSDKWithNoSSR image={image} />
            </Box>
        </Fragment>
    );
}

export default Home;