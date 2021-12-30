import React from 'react';

// import Mui Material components
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
// stlyes
import { useTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

// interface
import { ISubMenuList } from 'common/models';

import styles from 'theme/components/SubMenuListStyles';

export default function SubMenuList({ collapseClick, name, listItem }: ISubMenuList) {

    const theme = useTheme();
    const classes = makeStyles(styles(theme))();
    const tmpName = name.substring(0, name.indexOf('-'));

    return (
        <Collapse in={collapseClick[tmpName]} key={name} timeout="auto" unmountOnExit>
            <List disablePadding className={classes.subMenu}>
                {listItem.map(item => (
                    <ListItemButton key={item.id} className={classes.subMenuList}>
                        <ListItemText secondary={item.title} />
                    </ListItemButton>
                ))}
            </List>
        </Collapse >

    )
};
