import { fireEvent, render, waitFor, within } from '@testing-library/react';
import { NestedComment } from '../../../common/types/posts';
import { Comment } from './';
import { componentsTestId } from '../../../common/constants/testid';
import { mockThemeProvider } from '../../../common/utils/test';

describe('Comment Component', () => {
  const mockComment: NestedComment = {
    id: 1,
    author: { id: 1, username: 'user1' },
    content: 'This is a comment',
    timestamp: '2024-08-02T14:00',
    replies: [
      {
        id: 2,
        author: { id: 2, username: 'user2' },
        content: 'This is a reply',
        timestamp: '2024-08-02T15:00',
        replies: [],
      },
    ],
  };

  const mockOnSave = jest.fn();

  test('renders the comment with author, timestamp, content, and replies', () => {
    const { getByText, getAllByTestId } = render(
      mockThemeProvider(<Comment onSave={mockOnSave} comment={mockComment} />)
    );

    const authorElement = getByText(/user1 - 2024-08-02T14:00/i);
    expect(authorElement).toBeInTheDocument();

    const contentElement = getByText(/this is a comment/i);
    expect(contentElement).toBeInTheDocument();

    const commentActions = getAllByTestId(componentsTestId.comment.actions);
    expect(commentActions).toHaveLength(2);

    const replyAuthorElement = getByText(/user2 - 2024-08-02T15:00/i);
    expect(replyAuthorElement).toBeInTheDocument();
    const replyContentElement = getByText(/this is a reply/i);
    expect(replyContentElement).toBeInTheDocument();
  });

  test('show reply on reply button click', () => {
    const { getAllByTestId, queryByTestId, getByTestId } = render(
      mockThemeProvider(<Comment onSave={mockOnSave} comment={mockComment} />)
    );

    let replySection = queryByTestId(componentsTestId.comment.reply);
    expect(replySection).toBeNull();

    const replyButton = getAllByTestId(componentsTestId.comment.replybutton);
    fireEvent.click(replyButton[0]);

    replySection = getByTestId(componentsTestId.comment.reply);
    expect(replySection).toBeInTheDocument();

    const saveButton = within(replySection).getByText(/Responder/i);
    expect(saveButton).toBeDisabled();
  });

  test('hide reply on cancel button click', () => {
    const { getAllByTestId, queryByTestId, getByTestId } = render(
      mockThemeProvider(<Comment onSave={mockOnSave} comment={mockComment} />)
    );

    let replySection = queryByTestId(componentsTestId.comment.reply);
    expect(replySection).toBeNull();

    const replyButton = getAllByTestId(componentsTestId.comment.replybutton);
    fireEvent.click(replyButton[0]);

    replySection = getByTestId(componentsTestId.comment.reply);
    expect(replySection).toBeInTheDocument();

    const cancelButton = within(replySection).getByText(/Cancelar/i);
    fireEvent.click(cancelButton);

    replySection = queryByTestId(componentsTestId.comment.reply);
    expect(replySection).toBeNull();
  });

  test('calls onSave with the correct arguments when replying', async () => {
    const mockOnSave = jest.fn(() => Promise.resolve());

    const { queryByTestId, getAllByTestId, getByTestId } = render(
      mockThemeProvider(<Comment onSave={mockOnSave} comment={mockComment} />)
    );

    let replySection = queryByTestId(componentsTestId.comment.reply);
    expect(replySection).toBeNull();

    const replyButton = getAllByTestId(componentsTestId.comment.replybutton);
    fireEvent.click(replyButton[0]);

    replySection = getByTestId(componentsTestId.comment.reply);
    expect(replySection).toBeInTheDocument();

    const replyTextarea = within(replySection).getByTestId(
      componentsTestId.comment.replyText
    );
    fireEvent.change(replyTextarea, { target: { value: 'Test reply' } });
    expect(replyTextarea).toHaveValue('Test reply');

    const saveButton = within(replySection).getByText(/Responder/i);
    expect(saveButton).not.toBeDisabled();
    fireEvent.click(saveButton);

    await waitFor(() =>
      expect(mockOnSave).toHaveBeenCalledWith(1, 'Test reply')
    );
    await waitFor(() => expect(replySection).not.toBeInTheDocument());
  });
});
