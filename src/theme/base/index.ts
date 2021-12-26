import { createTheme } from "@mui/material/styles";

import colorCreator from "./colors";
import componentsOverrides from "./componentOverrides";

const themeCreator = (themeName: string) => {
    const theme = createTheme({
        palette: colorCreator(themeName),
        typography: {
            fontFamily: '"Ubuntu", "sans-serif"',
            fontWeightRegular:300,
            fontWeightBold:500,
            allVariants:{
                letterSpacing:'1px'
            }
        }
    })
    theme.components=componentsOverrides(theme);
    return theme;
}

export default themeCreator;

