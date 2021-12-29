import React, { useEffect } from 'react';

// import Mui Material Components
import { Tooltip, Card as MuiCard, CardContent, Typography, CardActions, Button, CardMedia, Stack } from '@mui/material';
// styles
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// icons
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Hooks
import { useFilterBarContext } from 'context/FilterBarContext';

import styles from 'theme/components/CardStyles';
import licor from 'assets/img/licor3.png';

export default function Card() {
    const title = 'Jonny walker, 300ml';
    const theme = useTheme();
    const { filterBar } = useFilterBarContext();
    const classes = makeStyles(styles(theme, filterBar.view))();

    useEffect(() => {
        console.log(filterBar);
    })
    return (
        <MuiCard className={classes.root}>
            <CardMedia
                component="img"
                image={licor}
                alt="Licor"
            />

            <CardContent>
                <Tooltip title={title} placement='right-start' arrow >
                    <Typography variant='h6' sx={{ textTransform: 'capitalize', letterSpacing: 0 }} gutterBottom noWrap>
                        {title}
                    </Typography>
                </Tooltip>
                <Typography variant='subtitle1' noWrap >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint animi fuga a nisi magni dignissimos labore vel alias ipsa. Saepe error, dolorem vel possimus non deleniti! Culpa beatae reiciendis debitis?
                </Typography>
            </CardContent>
            <CardActions >
                <Stack >
                    <Typography variant='caption'>
                        Precio
                    </Typography>
                    <Typography variant='h6' sx={{ color: theme.palette.warning.dark }} >
                        2000$
                    </Typography>
                </Stack>
                <Stack alignItems='center' className={classes.buttonGroupActions}>
                    <Button color='warning' size='small' variant='outlined'>
                        <RemoveIcon />
                    </Button>
                    2
                    <Button color='warning' size='small' variant='outlined'>
                        <AddIcon />
                    </Button>
                </Stack>
            </CardActions>
        </MuiCard>
    )
};
