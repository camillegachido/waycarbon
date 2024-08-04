import { render } from '@testing-library/react';
import { User } from '.';
import { mockThemeProvider } from '../../../common/utils/test';

describe('User Component', () => {
  const mockUser = {
    username: 'testuser',
    id: 1,
  };

  const time = '2019-02-20T13:22Z';

  it('should render user information correctly', () => {
    const { getByText, getByAltText } = render(
      mockThemeProvider(<User user={mockUser} time={time} />)
    );

    expect(getByText(mockUser.username)).toBeInTheDocument();

    expect(getByText(time)).toBeInTheDocument();

    expect(getByAltText(mockUser.username + ' avatar')).toBeInTheDocument();
  });
});
