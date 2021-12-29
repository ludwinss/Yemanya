import React from 'react';

// import Mui Material components
import { Paper, Typography } from '@mui/material';
// styles
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

// components
import { Filter, SwitchView } from 'components/Controls'

import styles from 'theme/components/FilterBarStyles';

export default function FilterBar() {

    const theme = useTheme()
    const classes = makeStyles(styles(theme))();

    return (
        <Paper className={classes.root}>
            <Typography variant='caption' marginLeft={2} marginRight='auto' ><strong>48</strong> Productos</Typography>
            <Filter />
            <SwitchView />
        </Paper>
    )

};
