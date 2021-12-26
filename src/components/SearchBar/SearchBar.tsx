import * as React from 'react';

// import Mui Material Components
import { InputAdornment, TextField } from '@mui/material';
// import icons Mui Material 
import SearchIcon from '@mui/icons-material/Search';
// import styles
import { styled } from '@mui/material/styles'

export default function SearchBar() {

    const IconAdornment = (< InputAdornment position='start' ><SearchIcon  /></InputAdornment>)
    const TextFieldStyled = styled(TextField)((theme) => ({
        '& .MuiInputBase-root':{
            borderRadius:25,
            minWidth:'310px'
        }
    }))
    return (
        <TextFieldStyled
            InputProps={{ startAdornment: IconAdornment }}
            placeholder='Busco...'
            size='small'
        />
    )
};
