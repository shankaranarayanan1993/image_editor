'use client'
import Image from "next/image";
import Grid from '@mui/material/Grid';

const Card = () => {
    return (
        <Grid item xs={4}>
            <Image
                id={"image"}
                width={375}
                height={375}
                src={"/demo-image.jpeg"}
                alt="Profile"
            />
        </Grid>
    );
}

export default Card;