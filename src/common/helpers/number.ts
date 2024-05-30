export function calculatePercentage(part: number, total: number): number {
  if (total === 0) {
    return 0;
  }

  return Math.floor((part / total) * 100);
}

export function sliceNumber(num: number, numOfChars: number): number {
  return Number(num.toFixed(numOfChars));
}
