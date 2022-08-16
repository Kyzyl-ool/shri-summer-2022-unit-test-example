export const innTest = (value) => {
  const type = typeof value
  if (!['string', 'number'].includes(type)) {
    return false;
  }

  if (type === 'number') {
    value = String(value);
  }

  const {length} = value;
  if (length === 10) {
    const weights = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    let sum = 0;
    for (let i = 0; i < length; i++) {
      sum += +value[i] * weights[i];
    }
    sum %= 11;
    if (sum > 9) {
      sum %= 10;
    }

    return +value[length - 1] === sum;
  }

  if (length === 12) {
    const weights1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    let sum1 = 0;
    for (let i = 0; i < 11; i++) {
      sum1 += +value[i] * weights1[i];
    }
    sum1 %= 11;
    if (sum1 > 9) {
      sum1 %= 10;
    }

    const weights2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
    let sum2 = 0;
    for (let i = 0; i < 12; i++) {
      sum2 += +value[i] * weights2[i];
    }
    sum2 %= 11;
    if (sum2 > 9) {
      sum2 %= 10;
    }


    return sum1 === +value[10] && sum2 === +value[11];
  }

  return false;
}