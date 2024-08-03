import { ApiService } from '../../services/api';
import { UserWithFriends } from '../../common/types/user';

export class GetUserUseCase {
  public async execute(id: number): Promise<UserWithFriends> {
    return await ApiService.instance
      .get(`/users/${id}`)
      .then(({ data }) => {
        return data as UserWithFriends;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}
