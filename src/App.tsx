import { ThemeProvider } from 'styled-components';
import { theme } from './common/constants/theme';
import AuthProvider from './contexts/auth';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
