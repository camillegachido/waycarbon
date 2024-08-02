import { render } from '@testing-library/react';
import { Header } from './';
import { mockThemeProvider } from '../../common/utils/test';

describe('Header Component', () => {
  it('should render the Header component with the Logo inside the Layout', () => {
    const { getByText } = render(mockThemeProvider(<Header />));
    expect(getByText('Blogging')).toBeInTheDocument();
  });
});
