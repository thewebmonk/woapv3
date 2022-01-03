export const transformSearchResult = (results) => {
  return results.items.map((result) => result.fields);
};
