import { FC, PropsWithChildren, createContext, useState } from "react";
import { ThemeContextType } from "../types/types";

export const initialThemeState = {
  theme: "light",
  toggleTheme: () => { }
}

export const ThemeContext = createContext<ThemeContextType>(initialThemeState);

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
