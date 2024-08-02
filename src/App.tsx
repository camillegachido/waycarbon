import { ThemeProvider } from 'styled-components';
import { theme } from './common/constants/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Olá</h1>
    </ThemeProvider>
  );
}

export default App;
