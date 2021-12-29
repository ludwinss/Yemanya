import { Theme } from '@mui/material/styles'

const FilterBarStyles = (theme: Theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: theme.spacing(2),
        padding: theme.spacing(2, 1),
        [theme.breakpoints.down('sm')]: {
            alignItems: 'initial',
            flexFlow: 'column nowrap'
        }
    }

})

export default FilterBarStyles;
