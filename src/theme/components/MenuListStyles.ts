import { Theme } from '@mui/material/styles'


const MenuListStyles = (theme: Theme) => ({
    rootMenuList: {
        display: 'flex',
        flexFlow: 'column wrap',
        padding: theme.spacing(2, 0),
        justifyContent: 'center',
        '&.MuiList-root': {
            padding: theme.spacing(2, 0),
        },
        '& .MuiListItemText-primary': {
            textTransform: "capitalize",
            fontSize: '14px'
        }
    },
})

export default MenuListStyles;
