'use client'
import Image from "next/image";
import Grid from '@mui/material/Grid';

interface Props {
    item: any
}

const Card = ({ item }: Props) => {
    return (
        <Grid item xs={4}>
            <Image
                id={"image"}
                width={375}
                height={375}
                src={item}
                alt="Profile"
            />
        </Grid>
    );
}

export default Card;