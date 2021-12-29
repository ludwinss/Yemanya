import { Theme } from '@mui/material/styles'

const CardStyles = (theme: Theme, view: string) => ({
    root: {
        display: 'flex',
        justifyContent: "space-between",
        flexFlow: view,
        '& .MuiCardMedia-img': {
            height: '210px',
            width: '40%',
            ...Boolean(view === 'column') && {
                width: 'unset',
                height: '300px'
            },
        },
        '& .MuiCardMedia-root': {
            objectFit: 'scale-down',
            margin: 'auto'
        },
        '& .MuiCardContent-root': {
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'space-evenly'

        },
        '& .MuiCardActions-root': {
            padding: theme.spacing(2),
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'inherit',
            alignContent: 'space-between',
            ...Boolean(view !== 'column') && {
                justifyContent: 'center',
            },
        }
    },
    buttonGroupActions: {
        '& .MuiButtonBase-root': {
            padding: theme.spacing(.5),
            minWidth: '30px'
        }
    }
})

export default CardStyles;
