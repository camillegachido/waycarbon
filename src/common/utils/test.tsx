import { ThemeProvider } from 'styled-components';
import { theme } from '../constants/theme';

export const mockThemeProvider = (children: React.ReactNode) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
