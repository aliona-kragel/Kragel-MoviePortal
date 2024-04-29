import { FC, useContext } from "react";
import { MoonFilled, SunFilled } from "@ant-design/icons";
import { Button } from "antd";
import { ThemeContext } from "../../context/theme-context";

export const ThemeSwitcher: FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button ghost onClick={toggleTheme}>{theme === 'light' ? <MoonFilled /> : <SunFilled />}</Button>
  );
}