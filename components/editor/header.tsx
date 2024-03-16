import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import Link from 'next/link';

const EditorHeader = () => {

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Link href={'/'} color="inherit" style={{ textDecoration: 'none' }}>
                    Go Home
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default EditorHeader;