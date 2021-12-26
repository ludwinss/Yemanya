import { Theme } from '@mui/material/styles';

const NavBarStyles = (theme: Theme) => ({
    rootNavBar: {
        '&.MuiAppBar-root': {
            boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 8px 8px;',
        },
    },
    rootList: {
        display: 'flex',
    }
})

export default NavBarStyles;