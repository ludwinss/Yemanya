import { Components, Theme } from "@mui/material/styles";

export default function componentsOverrides(theme: Theme): Components {
    return ({
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.background.default,
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: theme.palette.primary.main,
                },

            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    '&:hover': {
                        borderLeft: `5px solid  ${theme.palette.primary.main}`,
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        '& .MuiListItemIcon-root': {
                            color: theme.palette.secondary.contrastText,
                        }
                    },
                }
            }
        },
        MuiIconButton: {
            defaultProps: {
                color: 'primary'
            },
            styleOverrides: {
                root: {
                    background: 'white',
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.secondary.contrastText,
                        '& .MuiListItemIcon-root': {
                            color: theme.palette.secondary.contrastText,
                        }
                    },
                    '&.MuiSelected': {
                        color: theme.palette.secondary.contrastText,
                        backgroundColor: theme.palette.secondary.light
                    }
                },
            }
        },
        MuiTypography: {
            styleOverrides: {
                noWrap: {
                    whiteSpace: 'normal',
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: "vertical"
                }
            }
        }
    })
} 