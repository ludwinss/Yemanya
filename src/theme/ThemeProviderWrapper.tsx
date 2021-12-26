import React, { useState } from 'react';

import { ThemeProvider } from "@mui/material/styles"
import themeCreator from "./base";

// import Context Theme 
import { ThemeContext } from 'context/ThemeContext';

import { ThemeProviderWrapperProps } from 'common/models';

export default function ThemeProviderWrapper(props: ThemeProviderWrapperProps) {

    const currentTheme = localStorage.getItem('theme') || 'light';
    const [themeName, _setThemeName] = useState(currentTheme)
    const theme = themeCreator(themeName)

    const setThemeName = (themeName: string): void => {
        _setThemeName(themeName);
        localStorage.setItem('theme', themeName)
    }

    return (
        <ThemeContext.Provider value={setThemeName}>
            <ThemeProvider theme={theme} >
                {props.children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
};


