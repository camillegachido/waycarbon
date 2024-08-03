import { ApiComment } from '@/common/types/posts';
import {
  organizePostCommentsAsTree,
  organizeCommentsAsTree,
} from '@/common/utils/post';

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
