import React, { useState } from 'react';

// import Mui Theme provider
import { ThemeProvider } from "@mui/material/styles"

// import Context Theme 
import { ThemeContext } from 'context/ThemeContext';

import { ThemeProviderWrapperProps } from 'common/models';
import themeCreator from "./base";

export default function ThemeProviderWrapper({ children }: ThemeProviderWrapperProps) {

    const currentTheme = localStorage.getItem('theme') || 'light';
    const [themeName, _setThemeName] = useState(currentTheme)
    const theme = themeCreator(themeName)

    const setThemeName = React.useCallback((themeNameTmp: string): void => {
        _setThemeName(themeNameTmp);
        localStorage.setItem('theme', themeNameTmp)
    }, [themeName])

    return (
        <ThemeContext.Provider value={setThemeName}>
            <ThemeProvider theme={theme} >
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
};


