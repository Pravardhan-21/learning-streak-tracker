export function calculateStreak(dates: string[]) {
  if (dates.length === 0) return 0;

  const sorted = dates
    .map(date => new Date(date))
    .sort((a, b) => b.getTime() - a.getTime());

  let streak = 1;

  for (let i = 1; i < sorted.length; i++) {
    const diff =
      (sorted[i - 1].getTime() - sorted[i].getTime()) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}