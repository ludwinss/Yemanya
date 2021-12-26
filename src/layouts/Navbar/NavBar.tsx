import React from 'react';

// import styles Mui Material 
import {
    AppBar,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Toolbar,
    Stack,
} from '@mui/material';
// import styles
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

// import components
import Categories from 'components/Categories/Categories';

import styles from 'theme/layouts/NavBarStyles';

export default function NavBar() {

    const theme = useTheme();
    const classes = makeStyles(styles(theme))();

    return (
        <AppBar position='relative' className={classes.rootNavBar} >
            <Toolbar >
                <Stack direction='row' sx={{ width: '100%' }} justifyContent='space-around' >
                    <Categories />
                    <List className={classes.rootList}>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemText primary="Home" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemText primary="Contactus" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="AboutDeveploment" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Stack>
            </Toolbar>
        </AppBar>
    )
};
