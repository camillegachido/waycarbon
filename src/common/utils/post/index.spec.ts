import { ApiComment } from '../../../common/types/posts';
import {
  organizePostCommentsAsTree,
  organizeCommentsAsTree,
  extractParagraphTexts,
  updatePostComments,
} from '../../../common/utils/post';

const apiComments: ApiComment[] = [
  {
    id: 1,
    respondsTo: null,
    author: { id: 2, username: 'Joana' },
    timestamp: '2019-02-20T13:22Z',
    content: 'Comment 1',
  },
  {
    id: 2,
    respondsTo: null,
    author: { id: 3, username: 'Arthur' },
    timestamp: '2019-02-17T11:23Z',
    content: 'Comment 2',
  },
  {
    id: 3,
    respondsTo: { id: 2 },
    author: { id: 4, username: 'Clara' },
    timestamp: '2019-02-23T07:48Z',
    content: 'Reply to Comment 2',
  },
  {
    id: 4,
    respondsTo: { id: 3 },
    author: { id: 5, username: 'Mauro' },
    timestamp: '2019-02-28T07:08Z',
    content: 'Reply to Comment 3',
  },
  {
    id: 5,
    respondsTo: { id: 3 },
    author: { id: 6, username: 'Rafaela' },
    timestamp: '2019-02-28T08:21Z',
    content: 'Another reply to Comment 3',
  },
];

const apiPost = {
  id: 1,
  timestamp: '2019-02-20T13:22Z',
  author: { id: 1, username: 'João' },
  title: 'Post Title',
  subtitle: 'Post Subtitle',
  content: '<p>Post content</p>',
  comments: apiComments,
};

export const comments = [
  {
    id: 1,
    respondsTo: null,
    author: { id: 2, username: 'Joana' },
    timestamp: '2019-02-20T13:22Z',
    content: 'Comment 1',
    replies: [],
  },
  {
    id: 2,
    respondsTo: null,
    author: { id: 3, username: 'Arthur' },
    timestamp: '2019-02-17T11:23Z',
    content: 'Comment 2',
    replies: [
      {
        id: 3,
        respondsTo: { id: 2 },
        author: { id: 4, username: 'Clara' },
        timestamp: '2019-02-23T07:48Z',
        content: 'Reply to Comment 2',
        replies: [
          {
            id: 4,
            respondsTo: { id: 3 },
            author: { id: 5, username: 'Mauro' },
            timestamp: '2019-02-28T07:08Z',
            content: 'Reply to Comment 3',
            replies: [],
          },
          {
            id: 5,
            respondsTo: { id: 3 },
            author: { id: 6, username: 'Rafaela' },
            timestamp: '2019-02-28T08:21Z',
            content: 'Another reply to Comment 3',
            replies: [],
          },
        ],
      },
    ],
  },
];

describe('organizeCommentsAsTree', () => {
  it('should organize comments into a tree structure', () => {
    const result = organizeCommentsAsTree(apiComments);

    expect(result).toEqual(comments);
  });
});

describe('organizePostCommentsAsTree', () => {
  it('should organize post comments into a tree structure', () => {
    const result = organizePostCommentsAsTree(apiPost);

    expect(result.comments).toEqual(comments);
  });
});

describe('extractParagraphTexts', () => {
  test('should extract texts from paragraphs correctly', () => {
    const str =
      '<p>Caros amigos, a mobilidade dos capitais internacionais desafia a capacidade de equalização das diversas correntes de pensamento. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a necessidade de renovação processual ainda não demonstrou convincentemente que vai participar na mudança das diretrizes de desenvolvimento para o futuro. O cuidado em identificar pontos críticos na complexidade dos estudos efetuados é uma das consequências das direções preferenciais no sentido do progresso. Do mesmo modo, a adoção de políticas descentralizadoras não pode mais se dissociar dos modos de operação convencionais.</p><p>lorem ipsum</p>';

    const expected = [
      'Caros amigos, a mobilidade dos capitais internacionais desafia a capacidade de equalização das diversas correntes de pensamento. Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a necessidade de renovação processual ainda não demonstrou convincentemente que vai participar na mudança das diretrizes de desenvolvimento para o futuro. O cuidado em identificar pontos críticos na complexidade dos estudos efetuados é uma das consequências das direções preferenciais no sentido do progresso. Do mesmo modo, a adoção de políticas descentralizadoras não pode mais se dissociar dos modos de operação convencionais.',
      'lorem ipsum',
    ];

    const result = extractParagraphTexts(str);
    expect(result).toEqual(expected);
  });

  test('should return an empty array if no paragraphs are found', () => {
    const str = '<div>Some content</div>';

    const expected: string[] = [];

    const result = extractParagraphTexts(str);
    expect(result).toEqual(expected);
  });

  test('should handle multiple paragraphs correctly', () => {
    const str =
      '<p>First paragraph.</p><p>Second paragraph.</p><p>Third paragraph.</p>';

    const expected = [
      'First paragraph.',
      'Second paragraph.',
      'Third paragraph.',
    ];

    const result = extractParagraphTexts(str);
    expect(result).toEqual(expected);
  });
});

describe('updatePostComments', () => {
  const comments = [
    {
      id: 1,
      author: { id: 1, username: 'John' },
      timestamp: '',
      content: 'Parent comment',
      replies: [],
    },
  ];

  const newComment = {
    id: 2,
    content: 'New nested comment',
    respondsTo: { id: 1 },
    author: { id: 2, username: 'Anne' },
    timestamp: '',
    replies: [],
  };

  test('should add a new comment to the replies of the parent comment', () => {
    const parent = 1;

    const expected = [
      {
        ...comments[0],
        replies: [{ ...newComment, replies: [] }],
      },
    ];

    const result = updatePostComments(comments, parent, newComment);
    expect(result).toEqual(expected);
  });

  test('should not modify comments if parent comment is not found', () => {
    const parent = 2;

    const expected = [...comments];

    const result = updatePostComments(comments, parent, newComment);
    expect(result).toEqual(expected);
  });

  test('should not mutate the original comments array', () => {
    const parent = 1;

    const originalComments = [...comments];
    updatePostComments(comments, parent, newComment);

    expect(comments).toEqual(originalComments);
  });

  test('should reply to replies', () => {
    const parent = 2;

    const comments = [
      {
        id: 1,
        author: { id: 1, username: 'John' },
        timestamp: '',
        content: 'Parent comment',
        replies: [
          {
            id: 2,
            author: { id: 1, username: 'John' },
            timestamp: '',
            content: 'Parent comment',
            replies: [],
          },
        ],
      },
    ];

    const newComment = {
      id: 3,
      content: 'New nested comment',
      respondsTo: { id: 3 },
      author: { id: 2, username: 'Anne' },
      timestamp: '',
      replies: [],
    };

    const expected = [
      {
        id: 1,
        author: { id: 1, username: 'John' },
        timestamp: '',
        content: 'Parent comment',
        replies: [
          {
            id: 2,
            author: { id: 1, username: 'John' },
            timestamp: '',
            content: 'Parent comment',
            replies: [newComment],
          },
        ],
      },
    ];
    updatePostComments(comments, parent, newComment);

    expect(comments).toEqual(expected);
  });
});
