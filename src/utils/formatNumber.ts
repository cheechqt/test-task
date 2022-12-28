export const formatNumber = (num: number): string => {
  return num > 9 ? "" + num : "0" + num;
};
