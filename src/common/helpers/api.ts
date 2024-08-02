export const extractId = (url: string) => {
  const parts = url.split('/');
  const id = parseInt(parts[parts.length - 1], 10);
  return {
    tableName: parts[1],
    id: isNaN(id) ? undefined : id,
  };
};
