export function getDiceRoll(random: () => number = Math.random): number {
  // just change
  return Math.floor(random() * 6) * 2;
}
