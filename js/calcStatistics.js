export function calcStatistics(text) {
  const words = text.split(/\s+/);
  const uniqueWords = new Set(words);

  const statistics = new Map();
  uniqueWords.forEach((word) => {
    const occurrences = words.filter((w) => w === word).length;
    statistics.set(word, occurrences);
  });

  return {
    uniqueWords: uniqueWords.size,
    occurrences: Object.fromEntries(statistics),
  };
}
