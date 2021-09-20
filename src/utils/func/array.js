export const countLoader = (count) => {
  let itemLoader = [];

  for (let i = 0; i < count; i++) {
    itemLoader.push([i]);
  }

  return itemLoader;
};
