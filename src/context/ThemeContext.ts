import { createContext } from "react";

export const ThemeContext = createContext((themeName: any): void => { themeName() });
