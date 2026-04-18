function calculateStats(attempts) {
  let total = 0;
  let max = 0;

  for (let i = 0; i < attempts.length; i++) {
    total += attempts[i].score;
    if (attempts[i].score > max) max = attempts[i].score;
  }

  return {
    average: total / attempts.length,
    highest: max,
    totalAttempts: attempts.length,
  };
}

module.exports = calculateStats;
