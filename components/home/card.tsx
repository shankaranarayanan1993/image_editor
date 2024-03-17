"use client";
import Image from "next/image";
import Grid from "@mui/material/Grid";

interface Props {
  item: any;
}

const Card = ({ item }: Props) => {
  return (
    <Grid item xs={4} sx={{ boxShadow: 5}}>
      <Image
        id={"image"}
        width={300}
        height={300}
        src={item || "/placeholder.png"}
        alt="Profile"
      />
    </Grid>
  );
};

export default Card;
