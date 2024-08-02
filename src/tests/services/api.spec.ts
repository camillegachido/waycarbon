import { extractId } from '../../common/helpers/api';
import { ApiService } from '../../services/api';
import { rawPost } from '../../services/data/rawPost';
import { users } from '../../services/data/users';

jest.mock('../../common/helpers/api', () => ({
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

      expect(result).toEqual({ data: rawPost });
    });

    it('should return a single user if id is provided', async () => {
      const userId = users[0].id;
      (extractId as jest.Mock).mockReturnValue({
        tableName: 'users',
        id: userId,
      });

      const result = await apiService.get(`/users/${userId}`);

      expect(result).toEqual({ data: users[0] });
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

      const result = await apiService.get(`/users/${nonExistentId}`);

      expect(result).toEqual({ data: undefined });
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
