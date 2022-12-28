export const getCoords = (
  totalItems: number,
  radius: number,
  parentOffsetWidth: number
) => {
  const itemStep = 360 / totalItems;
  const offsetToParentCenter = parentOffsetWidth / 2; // maybe parseInt
  const offsetToChildCenter = 6; // child radius
  const totalOffeset = offsetToParentCenter - offsetToChildCenter;

  const result = [];
  for (let i = 0; i < totalItems; i++) {
    const x = Math.cos(itemStep * i * (Math.PI / 180)) * radius;
    const y = Math.sin(itemStep * i * (Math.PI / 180)) * radius;
    result.push({
      index: i,
      left: x + 1 + totalOffeset,
      top: y + 1 + totalOffeset
    });
  }
  return result;
};
