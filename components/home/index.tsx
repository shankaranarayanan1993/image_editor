"use client";
import { useEffect, useState } from "react";
import Header from "./header";
import Card from "./card";
import { Grid, Box } from "@mui/material";
import CreativeEditorSDKWithNoSSR from "../ceSdk";
import removeImageBackground from "@/utils/removeImageBackground";
import createBlog from "@/utils/createBlog";

const DEFAULT_ARRAY = new Array(6).fill("");

const Home = () => {
  const [importedImage, setImportedImage] = useState<string>("");
  const [bgRemovedImage, setBgRemovedImage] = useState<string>("");
  const [savedImages, setSavedImages] = useState<string[]>(DEFAULT_ARRAY);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    demoImageHandler();
  }, []);

  const resetHandler = () => {
    setBgRemovedImage("");
    setSavedImages((preState: string[]) => preState.map((image: string) => ""));
    setCurrentImageIndex(0);
  };

  const imageExportHandler = (data: string) => {
    setSavedImages((preState: string[]) => {
      let newItems = preState;
      newItems[currentImageIndex] = data;
      return newItems;
    });
    setCurrentImageIndex((preState) => (preState === 5 ? 0 : preState + 1));
  };

  const imageUploadHandler = async (data: File) => {
    resetHandler();
    setImportedImage(URL.createObjectURL(data));
    const objectUrl = await removeImageBackground(data);
    objectUrl && setBgRemovedImage(objectUrl);
  };

  const demoImageHandler = async () => {
    const blob = await createBlog("/demo-image.jpeg");
    const objectUrl = blob && await removeImageBackground(blob);
    objectUrl && setBgRemovedImage(objectUrl);
  };

  return (
    <>
      <Header imageHandler={imageUploadHandler} image={importedImage} />
      <Box
        sx={{
          marginTop: "2%",
          marginBottom: "2%",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        Change background for your selected images in below editor
      </Box>
      Note: it removes the background by default
      <Box sx={{ marginTop: "20px" }}>
        <CreativeEditorSDKWithNoSSR
          image={bgRemovedImage}
          imageExportHandler={imageExportHandler}
        />
      </Box>
      <Box
        sx={{
          marginTop: "2%",
          marginBottom: "2%",
          fontSize: "20px",
          fontWeight: "700",
        }}
      >
        Result of edited image:
      </Box>
      <Grid container spacing={0} sx={{ marginTop: "20px" }}>
        {savedImages?.map((image: string, index: number) => (
          <Card key={index + image} image={image} />
        ))}
      </Grid>
    </>
  );
};

export default Home;
