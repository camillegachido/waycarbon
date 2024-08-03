import { render } from '@testing-library/react';
import { Post } from '.';
import { mockThemeProvider } from '../../../common/utils/test';

describe('Post Component', () => {
  const mockPost = {
    id: 1,
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    content: 'This is the content of the post.',
  };

  test('renders the post with correct title, subtitle, content, and link', () => {
    const { getByText, getByRole } = render(
      mockThemeProvider(<Post post={mockPost} />)
    );

    const titleElement = getByText(/test title/i);
    expect(titleElement).toBeInTheDocument();

    const subtitleElement = getByText(/test subtitle/i);
    expect(subtitleElement).toBeInTheDocument();

    const contentElement = getByText(/this is the content of the post./i);
    expect(contentElement).toBeInTheDocument();

    const readMoreLink = getByRole('link', { name: /ler mais/i });
    expect(readMoreLink).toBeInTheDocument();
    expect(readMoreLink).toHaveAttribute('href', '/');
  });
});
