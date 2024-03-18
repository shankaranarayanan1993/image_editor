"use client";
import Image from "next/image";
import Grid from "@mui/material/Grid";

interface Props {
  image: string;
}

const Card = ({ image }: Props) => {
  return (
    <Grid item xs={4} sx={{ boxShadow: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '3px'}}>
      <Image
        id={"image"}
        width={380}
        height={380}
        src={image || "/placeholder.png"}
        alt="Profile"
      />
    </Grid>
  );
};

export default Card;
