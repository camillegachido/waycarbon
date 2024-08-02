export const extractId = (url: string) => {
  const parts = url.split('/');
  return { tableName: url[0], id: parseInt(parts[parts.length - 1]) };
};
