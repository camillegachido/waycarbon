import { addFriendsToUser } from '../common/utils/user';
import { extractId } from '../common/helpers/api';
import { DataBase, GetResponse, Post } from '../common/types/api';
import { ApiPost } from '../common/types/posts';
import { User, UserWithFriends } from '../common/types/user';
import { rawPost } from './data/rawPost';
import { users } from './data/users';

export class ApiService {
  private static _instance: ApiService;
  private dataBase: DataBase = {
    post: rawPost,
    users: users,
  };

  public static get instance(): ApiService {
    if (!ApiService._instance) {
      ApiService._instance = new ApiService();
    }

    return ApiService._instance;
  }

  public get(url: string): Promise<GetResponse<ApiPost | User>> {
    return new Promise((resolve, reject) => {
      const { tableName, id } = extractId(url);

      setTimeout(() => {
        if (!this.dataBase[tableName as keyof DataBase]) {
          reject({ error: 'Not found' });
        }

        const table = this.dataBase[tableName as keyof DataBase];

        if (tableName === 'post') {
          return resolve({ data: table as ApiPost } as GetResponse<ApiPost>);
        }

        if (tableName === 'users' && id) {
          const data = (table as User[]).find((item) => item.id === id);
          if (!data) return reject({ error: 'Not found' });

          return resolve({
            data: addFriendsToUser(table as User[], data),
          } as GetResponse<UserWithFriends>);
        }

        reject({ error: 'Not found' });
      }, 2000);
    });
  }

  public post<T>(url: string, payload: T): Promise<Post<T>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve({ url, data: payload });
      }, 2000);
    });
  }
}
