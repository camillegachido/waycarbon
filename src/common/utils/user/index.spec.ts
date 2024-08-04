import { User, UserWithFriends } from '../../../common/types/user';
import { addFriendsToUser } from '../../../common/utils/user';

describe('addFriendsToUser', () => {
  const users: User[] = [
    {
      id: 1,
      username: 'João Figueiredo',
      memberSince: '2014-05-03T16:12Z',
      friendIds: [2, 4],
      posts: [],
      avatar_url: '',
    },
    {
      id: 2,
      username: 'Joana Vasconcellos',
      memberSince: '2015-05-02T11:32Z',
      friendIds: [1],
      posts: [],
      avatar_url: '',
    },
    {
      id: 3,
      username: 'Arthur Silveira',
      memberSince: '2016-01-15T08:20Z',
      friendIds: [],
      posts: [],
      avatar_url: '',
    },
    {
      id: 4,
      username: 'Clara Passos',
      memberSince: '2017-08-21T14:52Z',
      friendIds: [1],
      posts: [],
      avatar_url: '',
    },
  ];

  it('should add friends to the user', () => {
    const user: User = users[0];
    const expectedUserWithFriends: UserWithFriends = {
      ...user,
      friends: [
        { id: 2, username: 'Joana Vasconcellos', avatar_url: '' },
        { id: 4, username: 'Clara Passos', avatar_url: '' },
      ],
    };

    const result = addFriendsToUser(users, user);

    expect(result).toEqual(expectedUserWithFriends);
  });

  it('should handle a user with no friends', () => {
    const user: User = users[2];
    const expectedUserWithFriends: UserWithFriends = {
      ...user,
      friends: [],
    };

    const result = addFriendsToUser(users, user);

    expect(result).toEqual(expectedUserWithFriends);
  });

  it('should handle a user with friends that do not exist in the list', () => {
    const user: User = { ...users[0], friendIds: [99, 100] };
    const expectedUserWithFriends: UserWithFriends = {
      ...user,
      friends: [],
    };

    const result = addFriendsToUser(users, user);

    expect(result).toEqual(expectedUserWithFriends);
  });
});
