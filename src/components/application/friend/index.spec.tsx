import { render } from '@testing-library/react';
import { Friend } from '.';
import { mockThemeProvider } from '../../../common/utils/test';

describe('Friend Component', () => {
  const mockUser = {
    username: 'testuser',
    memberSince: '',
    friendIds: [],
    posts: [],
    id: 1,
    avatar_url: '',
  };

  it('should render the user avatar with correct alt text', () => {
    const { getByAltText } = render(
      mockThemeProvider(<Friend user={mockUser} />)
    );

    const avatar = getByAltText('testuser avatar');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', '');
  });

  it('should render the user name', () => {
    const { getByText } = render(mockThemeProvider(<Friend user={mockUser} />));

    const name = getByText('testuser');
    expect(name).toBeInTheDocument();
  });

  it('should render the unfollow button with correct text', () => {
    const { getByText } = render(mockThemeProvider(<Friend user={mockUser} />));

    const button = getByText('Deixar de seguir');
    expect(button).toBeInTheDocument();
  });
});
