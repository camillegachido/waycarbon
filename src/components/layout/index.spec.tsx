import { render } from '@testing-library/react';
import { Layout } from './';

describe('Layout Component', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Layout>Test Content</Layout>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply className correctly', () => {
    const { container } = render(
      <Layout className="test-class">Test Content</Layout>
    );
    expect(container.firstChild).toHaveClass('test-class');
  });
});
