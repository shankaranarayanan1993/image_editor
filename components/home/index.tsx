'use client'
import { useContext } from "react";
import Header from "./header";
import Card from "./card";
import { Grid, Box } from '@mui/material';
import { HomeContxt } from "@/data/homeContxt";

const Home = () => {

    const { savedImages } = useContext(HomeContxt);

    return (
        <>
            <Header />
            <Grid container spacing={2}>
                {savedImages?.map((item: any, index: number) => (
                    <Card key={index} item={item} />
                ))}
            </Grid>
        </>
    );
}

export default Home;