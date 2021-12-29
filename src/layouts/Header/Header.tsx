import React from 'react';

// import mui Material components
import { AppBar, Toolbar, Hidden, Stack, IconButton } from '@mui/material';
// styles
import { makeStyles } from '@mui/styles';
// icons
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

// import  components
import SearchBar from 'components/SearchBar/SearchBar';
import Logo from 'components/Logo/Logo';
import { Avatar } from 'components/Controls';

import styles from 'theme/layouts/HeaderStyles';
import Categories from 'components/Categories/Categories';

export default function Header() {

    const classes = makeStyles(styles)();

    return (
        <AppBar position='fixed'>
            <Toolbar className={classes.rootHeader}>
                <Hidden mdDown>
                    <Logo >
                        <Categories displayLabel={false} />
                    </Logo>
                </Hidden>
                <SearchBar />
                <Hidden mdDown>
                    <Stack direction='row' spacing={2}>
                        <Avatar>
                            <IconButton>
                                <PersonOutlineIcon />
                            </IconButton>
                        </Avatar>
                        <Avatar>
                            <IconButton>
                                <ShoppingBagIcon />
                            </IconButton>
                        </Avatar>
                    </Stack>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
};
