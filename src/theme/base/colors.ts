import { PaletteOptions } from '@mui/material/styles'

const lightColor: PaletteOptions = {
    primary: {
        main: '#424874',
        contrastText: '#22243A'
    },
    secondary: {
        main: '#95D1CC',
        contrastText: '#F0F8F8'
    },
    text: {
        primary: '#22243A',
    },
    background: {
        default: '#FFF',
        paper: '#FFF'
    }
}

const darkColor = {

}

const colorCreator = (colorName: string): PaletteOptions => {
    switch (colorName) {
        case 'light':
            return lightColor;
        case 'dark':
            return darkColor;
        default:
            return lightColor;
    }
}

export default colorCreator;