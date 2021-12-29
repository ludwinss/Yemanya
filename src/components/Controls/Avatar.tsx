import React from 'react';

// import mui component
import { Avatar as MuiAvatar } from '@mui/material';

import { AvatarProps } from 'common/models'

export default function Avatar({ children }: AvatarProps) {
    return (
        <MuiAvatar >{children}</MuiAvatar>
    )

};
