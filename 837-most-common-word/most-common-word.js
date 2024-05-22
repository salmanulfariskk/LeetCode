/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  const words = paragraph.toLowerCase().match(/\w+/g);
  const unbannedWords = words.filter(word => !banned.includes(word));
  const wordCount = {};
  for (const word of unbannedWords) {
    wordCount[word] = (wordCount[word] || 0) + 1;
  }
  const maxCount = Math.max(...Object.values(wordCount));
  return Object.keys(wordCount).find(word => wordCount[word] === maxCount);
};