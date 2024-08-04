import { extractId } from '../common/helpers/api';
import { ApiService } from './api';
import { rawPost } from './data/rawPost';
import { users } from './data/users';

jest.mock('../common/helpers/api', () => ({
  extractId: jest.fn(),
}));

describe('ApiService', () => {
  let apiService: ApiService;

  beforeEach(() => {
    apiService = ApiService.instance;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('get method', () => {
    it('should return the entire post', async () => {
      (extractId as jest.Mock).mockReturnValue({ tableName: 'post', id: null });

      const result = await apiService.get('/post');

      expect(result).toMatchObject({
        data: {
          ...rawPost,
          author: {
            ...rawPost.author,
            avatar_url: {},
          },
        },
      });
    });

    it('should return a single user if id is provided', async () => {
      const userId = users[0].id;
      (extractId as jest.Mock).mockReturnValue({
        tableName: 'users',
        id: userId,
      });

      const result = await apiService.get(`/users/${userId}`);

      expect(result).toEqual({
        data: {
          ...users[0],
          avatar_url: {},
          friends: [
            {
              id: 2,
              username: 'Joana Vasconcellos',
              avatar_url: {},
            },
            {
              id: 4,
              username: 'Clara Passos',
              avatar_url: {},
            },
          ],
        },
      });
    });

    it('should return an error if table is not found', async () => {
      (extractId as jest.Mock).mockReturnValue({
        tableName: 'nonExistentTable',
        id: null,
      });

      await expect(apiService.get('/nonExistentTable')).rejects.toEqual({
        error: 'Not found',
      });
    });

    it('should return an error if user is not found', async () => {
      const nonExistentId = 99999;
      (extractId as jest.Mock).mockReturnValue({
        tableName: 'users',
        id: nonExistentId,
      });

      await expect(apiService.get(`/users/${nonExistentId}`)).rejects.toEqual({
        error: 'Not found',
      });
    });
  });

  describe('post method', () => {
    it('should resolve with the provided payload', async () => {
      const payload = {
        id: 1,
        title: 'Test Post',
        content: 'This is a test post',
      };

      const result = await apiService.post('/post', payload);

      expect(result).toEqual({ url: '/post', data: payload });
    });
  });
});
