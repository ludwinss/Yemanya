import { Components ,Theme} from "@mui/material/styles";

export default function componentsOverrides(theme: Theme): Components {
    return ({
        MuiAppBar: {
            styleOverrides:{
                root:{
                    backgroundColor:theme.palette.background.default,
                }
            }
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                    '&:hover':{
                        borderBottom:'1px solid black'
                    }
                }
            }
        },
        MuiListItemButton:{
            styleOverrides:{
                root:{
                    '&:hover':{
                        backgroundColor:'rgba(255,255,255)'
                    }
                }
            }
        },
        MuiIconButton:{
            defaultProps:{
                color:'primary'
            },
            styleOverrides:{
                root:{
                    background:'white'
                }
            }
        }
    })
} 