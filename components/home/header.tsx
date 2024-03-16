import AppBar from '@mui/material/AppBar';
import { Toolbar, Button, Input } from '@mui/material';
import { useContext } from 'react';
import { HomeContxt } from '@/data/homeContxt';
import Link from 'next/link';

const HomeHeader = () => {

    const { importedImageHandler } = useContext(HomeContxt);
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        file && importedImageHandler(file)
        event.target.value = "";
    };

    return (
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
                <Link href={'/editor'} color="inherit" style={{ textDecoration: 'none' }}>
                    Editor
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default HomeHeader;