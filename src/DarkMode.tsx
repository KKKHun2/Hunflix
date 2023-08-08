import { createContext, useState } from 'react';

interface DarkModeContextType {
  handleChangeDarkMode: () => void;
  isDark: boolean;
}

export const DarkMode = createContext<DarkModeContextType>({
  handleChangeDarkMode: () => {},
  isDark: true,
});

export const DarkModeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(true);
  const handleChangeDarkMode = () => setIsDark(prev => !prev);

  return <DarkMode.Provider value={{ handleChangeDarkMode, isDark }}>{children}</DarkMode.Provider>;
};