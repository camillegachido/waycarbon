import { extractId } from '../../common/helpers/api';

describe('extractId', () => {
  it('should extract tableName and id from a URL with a valid ID', () => {
    const url = '/users/123';
    const result = extractId(url);

    expect(result).toEqual({ tableName: 'users', id: 123 });
  });

  it('should extract tableName and undefined id from a URL without a valid ID', () => {
    const url = '/users/';
    const result = extractId(url);

    expect(result).toEqual({ tableName: 'users', id: undefined });
  });

  it('should extract tableName and id from a URL with additional path segments', () => {
    const url = '/posts/456/comments/789';
    const result = extractId(url);

    expect(result).toEqual({ tableName: 'posts', id: 789 });
  });

  it('should return undefined for id if the URL ends with a non-numeric value', () => {
    const url = '/posts/abc';
    const result = extractId(url);

    expect(result).toEqual({ tableName: 'posts', id: undefined });
  });

  it('should handle URLs without an id segment', () => {
    const url = '/posts';
    const result = extractId(url);

    expect(result).toEqual({ tableName: 'posts', id: undefined });
  });

  it('should return undefined for id if the URL is empty', () => {
    const url = '';
    const result = extractId(url);

    expect(result).toEqual({ tableName: undefined, id: undefined });
  });
});
