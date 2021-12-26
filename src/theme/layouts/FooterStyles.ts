import { Theme } from "@mui/material/styles";

const HeaderStyles = (theme: Theme) => ({
    rootFooter: {
        backgroundColor: theme.palette.primary.dark,
        padding: ' 1% 1% 10% 1%',
    },
    itemFooter: {
        color: 'rgba(240,241,246,.8)',
        padding: '2% 0% 0% 2%',
        '& .MuiTypography-h5': {
            color: 'white',
            fontWeight: 400
        },
        '& .MuiIconButton-root': {
            backgroundColor: theme.palette.primary.dark,
            color: 'rgba(240,241,246,.8)',
        },
        "& a:hover":{
            color:'white'
        }
    },
})

export default HeaderStyles;