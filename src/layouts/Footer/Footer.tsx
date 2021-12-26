import React from 'react';

// import Mui Material component
import { Grid, Typography, IconButton, ButtonGroup, Link, Stack } from '@mui/material';
// styles
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
// icons
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';

import styles from 'theme/layouts/FooterStyles';

import Logo from 'components/Logo/Logo';

const about = {
    description: 'Rincon de confiteria BOLIVIANA con productos de gran variedad y precios economicos con el sabor de Bolivia',
    contactUs: [
        '©2021 Yemanya All Rights Reserverd',
        'Villa Maria calle 500 Sãu Paulo Brazil',
        'ludwinss@gmail.com',
        '+5561948942018'
    ]
}

const links = {
    social: {
        facebook: 'https://www.facebook.com/yemanya.org/asdasd1212fskdjal',
        whatsapp: 'whatsapp.com',
        telegram: 'telegram.com'
    }
}

export default function Footer() {

    const theme = useTheme()
    const classes = makeStyles(styles(theme))();

    return (
        <footer className={classes.rootFooter}>
            <Grid container justifyContent='space-around'>
                <Grid item lg={4} sm={6} xs={12} className={classes.itemFooter} >
                    <Logo />
                    <Typography variant='body2' component='div' marginY={2} gutterBottom>{about.description}</Typography>
                </Grid >
                <Grid item lg={3} sm={6} xs={12} className={classes.itemFooter}>
                    <Typography variant='h5' component='div' gutterBottom>About Us</Typography>
                    <Stack spacing={1} marginY={2}>
                        <Link href="#" underline="none" color='inherit'>
                            About Deveploment
                        </Link>
                        <Link href="#" underline="none" color='inherit'>
                            Terms & Conditions
                        </Link>
                        <Link href="#" underline="none" color='inherit'>
                            Privacy
                        </Link>
                    </Stack>
                </Grid>
                <Grid item lg={3} sm={12} xs={12} className={classes.itemFooter}>
                    <Typography variant='h5' component='div' gutterBottom>Contact Us</Typography>
                    <Stack spacing={1} marginY={2}>
                        {about.contactUs.map((value: string, index: number) => {
                            return <Typography key={index} variant="body2" component='div' gutterBottom> {value}</Typography>
                        })}
                    </Stack>
                    <ButtonGroup >
                        <IconButton href='/' >
                            <WhatsAppIcon />
                        </IconButton>
                        <IconButton href='/' >
                            <FacebookOutlinedIcon />
                        </IconButton>
                        <IconButton href='/' >
                            <TelegramIcon />
                        </IconButton>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </footer>
    )
};
