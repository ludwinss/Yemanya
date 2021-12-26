import * as React from 'react';

// import Mui Materialize components
import { Card, Box, Container, Grid, CardContent, Typography, CardActions, Button } from '@mui/material';

// import components
import Header from 'layouts/Header/Header';
import BottomNav from 'layouts/Navbar/BottomNav';
import Footer from 'layouts/Footer/Footer';
import Filter from 'components/FilterBar/FilterBar';

export default function MainPage() {
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );
    const card = (
        <React.Fragment>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </React.Fragment>
    );
    return (
        <div style={{ backgroundColor: '#F0F1F6' }}>
            <Header />
            <BottomNav />
            <Container sx={{ padding: '90px' }}>
                <Grid container>
                    <Grid item xs={12} marginBottom={2}>
                        <Filter></Filter>
                    </Grid>
                </Grid>
                <Grid container direction='row'>
                    <Grid item xs={3}>
                        skdlajs
                    </Grid>
                    <Grid item xs={9}>
                        <Card variant="outlined">{card}</Card>
                        <Card variant="outlined">{card}</Card>
                        <Card variant="outlined">{card}</Card>
                        <Card variant="outlined">{card}</Card>
                        <Card variant="outlined">{card}</Card>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </div>
    )
};
