import React from 'react';

import { Select, FormControl, MenuItem, Typography, Stack } from '@mui/material';

import { useFilterBarContext } from 'context/FilterBarContext';

export default function Filter() {
    const { setFilterBar, filterBar } = useFilterBarContext()
    return (

        <Stack direction='row' marginX={2} alignItems='center'>
            <Typography variant='body2' marginRight={2}>Filtrar</Typography>
            <FormControl sx={{ width: '180px' }}>
                <Select
                    name='filter'
                    size='small'
                    defaultValue='none'
                    onChange={(e) => setFilterBar(e.target.name, e.target.value)}
                    value={filterBar.filter}
                >
                    <MenuItem value='none'>Escoje</MenuItem>
                    <MenuItem value='popular'>Más Cotizados</MenuItem>
                    <MenuItem value='higher'>Mayor Precio</MenuItem>
                    <MenuItem value='less'>Menor Precio</MenuItem>
                </Select>
            </FormControl>
        </Stack>
    )

};
