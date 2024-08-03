import { render } from '@testing-library/react';
import { Loader } from '.';
import { mockThemeProvider } from '../../../common/utils/test';
import { componentsTestId } from '../../../common/constants/testid';

describe('Loader Component', () => {
  it('should render four loader divs', () => {
    const { getByTestId } = render(mockThemeProvider(<Loader />));

    const loaderContent = getByTestId(componentsTestId.loader.container);
    expect(loaderContent).toBeInTheDocument();

    const loaderDivs = loaderContent.querySelectorAll('div');
    expect(loaderDivs.length).toBe(4);
  });
});
