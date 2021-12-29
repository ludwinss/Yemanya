import React from 'react';

// import Mui Materialize components
import { Container, Grid } from '@mui/material';
// styles
// import {useTheme} from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

// import components
import Filter from 'components/FilterBar/FilterBar';
import Card from 'components/Card/Card';
// layouts
import Header from 'layouts/Header/Header';
import BottomNav from 'layouts/Navbar/BottomNav';
import Footer from 'layouts/Footer/Footer';

// hooks
import { useFilterBarContext } from 'context/FilterBarContext';

import styles from 'theme/pages/MainPageStyles';

export default function MainPage() {
    const { filterBar } = useFilterBarContext();
    const classes = makeStyles(styles(filterBar.view))();
    return (
        <div className={classes.root} >
            <Header />
            <BottomNav />
            <Container sx={{ paddingY: '90px' }}>
                <Grid container>
                    <Grid item xs={12} marginBottom={2}>
                        <Filter />
                    </Grid>
                </Grid>
                <Grid container direction='row' >
                    <Grid item xs={12} className={classes.grid}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
};
