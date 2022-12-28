export const getRotateDegree = (
  value: number,
  target: number,
  totalItems: number
): number => {
  const itemStep = 360 / totalItems;
  console.log(totalItems, itemStep);
  const diff = value - target;

  if (Math.abs(diff) < totalItems / 2) {
    return diff * itemStep;
  } else {
    const amt = totalItems - Math.abs(diff);

    if (value > target) {
      console.log(amt * -itemStep);
      return amt * -itemStep;
    } else {
      return amt * itemStep;
    }
  }
};
