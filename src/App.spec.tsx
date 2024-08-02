import App from './App';
import { render, screen } from '@testing-library/react';

describe('App', () => {
  test('renders app page', async () => {
    render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument();
  });
});
