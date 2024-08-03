import { render } from '@testing-library/react';
import { User } from '.';
import { mockThemeProvider } from '../../../common/utils/test';

describe('User Component', () => {
  const mockUser = {
    username: 'testuser',
    memberSince: 'January 2020',
    friendIds: [],
    posts: [],
    id: 1,
  };

  it('should render user information correctly', () => {
    const { getByText, getByAltText } = render(
      mockThemeProvider(<User user={mockUser} />)
    );

    expect(getByText(mockUser.username)).toBeInTheDocument();

    expect(getByText(mockUser.memberSince)).toBeInTheDocument();

    expect(getByAltText(mockUser.username + ' avatar')).toBeInTheDocument();
  });
});
