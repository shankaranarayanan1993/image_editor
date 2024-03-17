import AppBar from '@mui/material/AppBar';
import { Toolbar, Button, Input, Box } from '@mui/material';
import SelectedImage from './selectedImage';
import { fileToBlobConverter } from '@/utils/fileToBlobConverter';

interface Props {
    imageHandler: (data: any) => void,
    image: any;
}

const HomeHeader = ({ imageHandler, image }: Props) => {

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files?.[0];
        file && imageHandler(file)
        event.target.value = "";
    };
    return (
        <Box sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end', gap: "20px" }}>
                    <Input
                        id="file-upload"
                        type="file"
                        inputProps={{ 'aria-label': 'upload file', accept: "image/png, image/jpg, image/jpeg" }}
                        onChange={handleFileUpload}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="file-upload">
                        <Button color="inherit" component="span">
                            Upload
                        </Button>
                    </label>
                </Toolbar>
            </AppBar>
            <Box sx={{
                position: 'absolute',
                right: '-212px'
            }}>
                <SelectedImage image={image} />
            </Box>
        </Box>
    );
}

export default HomeHeader;