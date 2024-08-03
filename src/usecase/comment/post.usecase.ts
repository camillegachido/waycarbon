import { ApiComment, NestedComment } from '../../common/types/posts';
import { ApiService } from '../../services/api';

export class PostCommentUseCase {
  public async execute(payload: ApiComment): Promise<NestedComment> {
    return await ApiService.instance
      .post<ApiComment>(`/post/comment`, payload)
      .then(({ data }) => {
        return { ...data, replies: [] } as NestedComment;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}
