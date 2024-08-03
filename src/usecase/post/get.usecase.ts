import { ApiService } from '../../services/api';
import { ApiPost, NestedPost } from '../../common/types/posts';
import { organizePostCommentsAsTree } from '../../common/utils/post';

export class GetPostUseCase {
  public async execute(): Promise<NestedPost> {
    return await ApiService.instance
      .get('/post')
      .then(({ data }) => {
        return organizePostCommentsAsTree(data as ApiPost);
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}
