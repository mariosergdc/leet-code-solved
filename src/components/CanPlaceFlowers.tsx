/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) return true;
  if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) {
    return true;
  }
  let cont = 0;
  if (flowerbed.length > 1 && flowerbed[0] === 0 && flowerbed[1] === 0) {
    cont = 1;
    if (cont >= n) {
      return true;
    }
    flowerbed[0] = 1;
  }
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (
      flowerbed[i] === 0 &&
      flowerbed[i - 1] === 0 &&
      flowerbed[i + 1] === 0
    ) {
      cont++;
      if (cont >= n) {
        return true;
      }
      flowerbed[i] = 1;
    }
  }
  if (
    flowerbed[flowerbed.length - 1] === 0 &&
    flowerbed[flowerbed.length - 2] === 0
  ) {
    cont++;
    if (cont >= n) return true;
  }
  return false;
};
