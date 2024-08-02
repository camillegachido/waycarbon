import { extractId } from '../common/helpers/api';
import { DataBase, Post } from '../common/types/api';
import { ApiPost } from '../common/types/posts';
import { User } from '../common/types/user';
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

  public get(url: string) {
    return new Promise((resolve, reject) => {
      const { tableName, id } = extractId(url);

      setTimeout(() => {
        if (!this.dataBase[tableName as keyof DataBase]) {
          reject({ error: 'Not found' });
        }

        const table = this.dataBase[tableName as keyof DataBase];

        if (tableName === 'post') resolve({ data: table as ApiPost });

        if (tableName === 'users') {
          const data = (table as User[]).find((item) => item.id === id);
          return resolve({ data: data });
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
