import React, { useEffect, useRef } from 'react';

// import MUI material  components
import { Typography, IconButton, Stack, Tooltip } from '@mui/material';
// icons
import ViewArrayIcon from '@mui/icons-material/ViewArray';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

import { useFilterBarContext } from 'context/FilterBarContext';

export default function SwitchView() {

    const refArray = useRef<any>(null)
    const refColumn = useRef<any>(null)

    const { filterBar, setFilterBar } = useFilterBarContext();

    const handleViewSelect = (typeView: string) => {
        switch (typeView) {
            case 'column':
                setFilterBar('view', 'column')
                refColumn.current.classList.add("MuiSelected");
                refArray.current.classList.remove('MuiSelected')
                break;
            case 'row':
                setFilterBar('view', 'row')
                refColumn.current.classList.remove("MuiSelected");
                refArray.current.classList.add('MuiSelected')
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        handleViewSelect(filterBar.view)
    }, [])

    return (
        <Stack marginX={2} direction='row' alignItems='center'>
            <Typography variant='body2' marginRight={2}>Ver</Typography>
            <Tooltip title='column'>
                <IconButton ref={refColumn} onClick={() => handleViewSelect('column')}>
                    <ViewColumnIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title='row'>
                <IconButton ref={refArray} onClick={() => handleViewSelect('row')}>
                    <ViewArrayIcon />
                </IconButton>
            </Tooltip>
        </Stack >
    )
};

