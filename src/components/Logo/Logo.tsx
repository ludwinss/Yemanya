import * as React from 'react';

// import Mui Material componets
import { Typography,Stack } from '@mui/material';

// import model
import { LogoProps } from 'common/models';

export default function Logo(props:LogoProps) {
    return (
        <Stack direction='row' alignContent='center'>
            <Typography variant='h4'>
                Yemanya
            </Typography>
            {props.children}
        </Stack>
    )
};
