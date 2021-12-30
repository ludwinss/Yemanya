import { Theme } from '@mui/material/styles';

const SubMenuListStyles = (theme: Theme) => ({
    subMenu: {
        '&.MuiList-root': {
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-end',
            margin: theme.spacing(0, 3, 0, 0),
        }
    },
    subMenuList: {
        '&.MuiListItemButton-root': {
            padding: theme.spacing(1, 0),
            '&:hover': {
                border: 'none',
                backgroundColor: 'white',
                color: theme.palette.secondary.main
            }
        },
        '& .MuiListItemText-secondary': {
            fontWeight: 500,
            textTransform: 'capitalize',
            '&:hover': {
                border: 'none',
                backgroundColor: 'white',
                color: theme.palette.secondary.main
            }
        },
    },
})

export default SubMenuListStyles;