import { GenericUser, User, UserWithFriends } from '../../../common/types/user';
import { addFriendsToUser } from '../../../common/utils/user';

describe('addFriendsToUser', () => {
  const users: User[] = [
    {
      id: 1,
      username: 'user1',
      avatar_url: 'src/assets/images/avatar1.jpg',
      memberSince: '2021-01-01',
      friendIds: [2, 3],
      posts: [],
    },
    {
      id: 2,
      username: 'user2',
      avatar_url: 'src/assets/images/avatar2.jpg',
      memberSince: '2021-02-01',
      friendIds: [1],
      posts: [],
    },
    {
      id: 3,
      username: 'user3',
      avatar_url: 'src/assets/images/avatar3.jpg',
      memberSince: '2021-03-01',
      friendIds: [1],
      posts: [],
    },
    {
      id: 4,
      username: 'user4',
      avatar_url: 'src/assets/images/avatar4.jpg',
      memberSince: '2021-04-01',
      friendIds: [],
      posts: [],
    },
  ];

  it('should add friends to the user', () => {
    const user: User = users[0];
    const expectedFriends = [
      {
        id: 2,
        username: 'user2',
        avatar_url: {},
      },
      {
        id: 3,
        username: 'user3',
        avatar_url: {},
      },
    ];

    const result = addFriendsToUser(users, user);

    expect(result.friends).toEqual(expectedFriends);
  });

  it('should handle a user with no friends', () => {
    const user: User = users[3];
    const expectedFriends: GenericUser[] = [];

    const result = addFriendsToUser(users, user);

    expect(result.friends).toEqual(expectedFriends);
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
