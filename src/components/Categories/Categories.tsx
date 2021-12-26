import React from 'react';

// import components Mui material 
import { Button } from '@mui/material';
// icons
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
// styles
import { styled } from '@mui/material/styles';

// import model
import { CategoriesProps } from 'common/models';

function Categories(props: CategoriesProps) {

    const ButtonStyled = styled(Button)({
        height: '35px',
        alignSelf: 'center'

    })

    return (
        <ButtonStyled
            endIcon={
                props.displayLabel ? <ArrowRightRoundedIcon /> : <ArrowDropDownRoundedIcon  />
            }
            size='small'
        >
            <WidgetsRoundedIcon fontSize='small'/>
            {props.displayLabel ? 'Categories' : ''}
        </ButtonStyled>
    )

}

Categories.defaultProps = {
    displayLabel: true
}

export default Categories;