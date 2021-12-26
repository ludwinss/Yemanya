import { ReactChildren, ReactChild } from "react";

import { AvatarProps as AvatarPropsMui} from "@mui/material";

export interface AvatarProps extends AvatarPropsMui {
    children: ReactChild | ReactChildren | string,
}