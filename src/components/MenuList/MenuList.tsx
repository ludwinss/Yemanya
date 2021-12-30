import React, { useState } from 'react';

// import Mui Materialize component;
import { Typography, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
// icons
import LiquorIcon from '@mui/icons-material/Liquor';
import CakeIcon from '@mui/icons-material/Cake';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// styles
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';

import styles from 'theme/components/MenuListStyles';

// components
import SubMenuList from './SubMenuList';

const tmpjson: any = {
    bolos: {
        id: 1,
        children: [
            {
                id: 1,
                title: 'grande',
                path: ''
            },
            {
                id: 2,
                title: 'mediano',
                path: ''
            },
            {
                id: 3,
                title: 'pequeño',
                path: ''
            }
        ],
        path: '',
        icon: <CakeIcon />
    },
    bebidas: {
        id: 2,
        children: [
            {
                id: 1,
                title: 'Sukos',
                path: ''
            },
            {
                id: 2,
                title: 'Gaseosas',
                path: ''
            },
            {
                id: 3,
                title: 'Vinos',
                path: ''
            },
            {
                id: 4,
                title: 'tequila',
                path: ''
            }
        ],
        path: '',
        icon: <LiquorIcon />
    },
    comidas: {
        id: 3,
        children: [
            {
                id: 1,
                title: 'Ahogado',
                path: ''
            },
            {
                id: 2,
                title: 'Verduras',
                path: ''
            }
        ],
        icon: <LunchDiningIcon />,
        path: ''
    },
    transporte: {
        id: 4,
        children: [],
        path: '',
        icon: <DirectionsBusIcon />
    }
}

const ListItems = (collapseClick: any, setCollapseClick: any) =>
    Object.keys(tmpjson).map((value: string) => {
        const haveList = Boolean(tmpjson[value].children.length > 0);
        console.log(haveList)
        return (
            <div key={`${value}+${tmpjson[value].id}`}>
                <ListItemButton key={value} onClick={(() => setCollapseClick(value))}>
                    <ListItemIcon>
                        {tmpjson[value].icon}
                    </ListItemIcon>
                    <ListItemText primary={value} />
                    {haveList ? <ArrowDropDownIcon /> : null}
                </ListItemButton>
                {
                    haveList ?
                        <SubMenuList listItem={tmpjson[value].children}
                            name={`${value}- ${tmpjson[value].id}`} collapseClick={collapseClick}
                        />
                        : null
                }
            </div>
        )
    })



export default function MenuList() {

    const theme = useTheme();
    const classes = makeStyles(styles(theme))();

    const [collapseClick, _setCollapseClick] = useState<any>({});
    const setCollapseClick = (e: any) => (
        _setCollapseClick({ [e]: !collapseClick[e] })
    )
    return (
        <div className={classes.rootMenuList}>
            <List subheader={
                <ListSubheader component={Typography} textAlign='center' color='primary'>
                    Tienda Yemanya
                </ListSubheader>
            }>
                {ListItems(collapseClick, setCollapseClick)}
            </List>
        </div >
    )

};


