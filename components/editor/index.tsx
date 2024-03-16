'use client'
import { useContext } from "react";
import CreativeEditorSDKWithNoSSR from "../ceSdk";
import { HomeContxt } from "@/data/homeContxt";
import { Box } from "@mui/material";
import EditorHeader from "./header";

const Editor = () => {

    const { importedImage } = useContext(HomeContxt);
    return (
        <>
            <EditorHeader />
            <Box sx={{ marginTop: '20px' }}>
                <CreativeEditorSDKWithNoSSR image={importedImage} />
            </Box>
        </>
    );
}

export default Editor;