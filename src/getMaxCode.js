export const getMaxCode = list => {
  return list.length !== 0 ? Math.max(...list.map(item => item.code)) : 0;
};
