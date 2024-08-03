import { render } from '@testing-library/react';
import { Button } from './';
import { mockThemeProvider } from '../../../common/utils/test';
import { componentsTestId } from '../../../common/constants/testid';

describe('Button Component', () => {
  it('should render Default button by default', () => {
    const { getByTestId } = render(
      mockThemeProvider(<Button>Click me</Button>)
    );
    expect(getByTestId(componentsTestId.button.default)).toBeInTheDocument();
  });

  it('should render Text button when variant is text', () => {
    const { getByTestId } = render(
      mockThemeProvider(<Button variant="text">Click me</Button>)
    );
    expect(getByTestId(componentsTestId.button.text)).toBeInTheDocument();
  });

  it('should render Outlined button when variant is outlined', () => {
    const { getByTestId } = render(
      mockThemeProvider(<Button variant="outlined">Click me</Button>)
    );
    expect(getByTestId(componentsTestId.button.outlined)).toBeInTheDocument();
  });

  it('should apply small prop correctly', () => {
    const { getByTestId } = render(
      mockThemeProvider(<Button small>Click me</Button>)
    );
    expect(getByTestId(componentsTestId.button.default)).toHaveStyle(
      'padding: 8px 16px'
    );
  });
});
