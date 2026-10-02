export function getDiceRoll(random: () => number = Math.random): number {
  // comment
  return Math.floor(random() * 6) + 1;
}
