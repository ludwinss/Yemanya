import React from 'react';

// import MUI material  components
import { Typography, IconButton } from '@mui/material';
// icons
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

export default function SwitchView() {

    return (
        <div>
            <Typography variant='body2' marginRight={2}>Ver</Typography>
            <IconButton>
                <ViewArrayIcon />
            </IconButton>
            <IconButton>
                <ViewColumnIcon />
            </IconButton>
        </div>
    )
};

