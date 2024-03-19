import AppBar from "@mui/material/AppBar";
import { Toolbar, Button, Input, Box, Typography } from "@mui/material";
import SelectedImage from "./selectedImage";
import Image from "next/image";

interface Props {
  imageHandler: (data: File) => void;
  image: string;
}

const HomeHeader = ({ imageHandler, image }: Props) => {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    file && imageHandler(file);
    event.target.value = "";
  };
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "#3a99f2" }}>
        <Toolbar
          sx={{ display: "flex", justifyContent: "flex-end", gap: "20px" }}
        >
          <Typography sx={{ fontWeight: 'bold', marginRight: '35%', fontSize: '18px' }}>
            Image Editor
          </Typography>
          <Box>
            <Input
              id="file-upload"
              type="file"
              inputProps={{
                "aria-label": "upload file",
                accept: "image/png, image/jpg, image/jpeg",
              }}
              onChange={handleFileUpload}
              style={{ display: "none" }}
            />
            <label htmlFor="file-upload" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
              <Button color="inherit" component="span" sx={{
                fontWeight: 'bold',
                color: '#fffff !important'
              }}>
                Upload
              </Button>
              <Image
                alt={"Upload"}
                src={'/upload-icon.svg'}
                width={20}
                height={18}
              />
            </label>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          position: "absolute",
          right: "-184px",
        }}
      >
        <Typography sx={{ marginBottom: "5px" }}>Selected Image</Typography>
        <SelectedImage image={image} />
      </Box>
    </Box>
  );
};

export default HomeHeader;
