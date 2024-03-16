import AppBar from '@mui/material/AppBar';
import { Toolbar, Button, Input } from '@mui/material';

interface Props {
    imageHandler: (file: File) => void;
}

const Header = ({ imageHandler }: Props) => {

    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        file && imageHandler(file)
        event.target.value = "";
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Input
                    id="file-upload"
                    type="file"
                    inputProps={{ 'aria-label': 'upload file', accept:"image/png, image/jpg, image/jpeg"}}
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
    );
}

export default Header;