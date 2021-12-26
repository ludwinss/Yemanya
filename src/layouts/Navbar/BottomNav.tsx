import React from 'react';

// import Mui Materialize component
import {  BottomNavigation, BottomNavigationAction, Hidden } from '@mui/material';
// icons
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

export default function BottomNav() {
    return (
        <Hidden mdUp>
            <BottomNavigation showLabels  sx={{ bottom: 0, position: 'fixed', width: '100%', zIndex:1 }}>
                <BottomNavigationAction label='Inicio' icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction label='Categorias' icon={<WidgetsOutlinedIcon />} />
                <BottomNavigationAction label='Carro' icon={<ShoppingCartOutlinedIcon />} />
                <BottomNavigationAction label='Perfil' icon={<PermIdentityOutlinedIcon />} />
            </BottomNavigation>
        </Hidden>
    )
};
