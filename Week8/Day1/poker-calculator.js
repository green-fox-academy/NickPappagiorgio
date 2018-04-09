module.exports = function (black, white) {
  const array = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q', 'K', 'A'];
  const result = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'Jumbo', 'Queen', 'King', 'Ace'];

  let blackSplit = black.map(e => e.split(''));
  let whiteSplit = white.map(e => e.split(''));

  const highestBlackValue = array.indexOf(blackSplit[4][0]);
  const highestWhiteValue = array.indexOf(whiteSplit[4][0]);

  for (let i = 0; i < 5; i++) {
    if (blackSplit[i + 1] !== undefined) {
      if (blackSplit[i + 1][0] === blackSplit[i][0]) {
        return `Black wins! - (Pair: ${blackSplit[i][0]})`;
      }
    }
  };

  for (let i = 0; i < 5; i++) {
    if (whiteSplit[i + 1] !== undefined) {
      if (whiteSplit[i + 1][0] === whiteSplit[i][0]) {
        return `White wins! - (Pair: ${whiteSplit[i][0]})`;
      }
    }
  };
  
  if (highestBlackValue > highestWhiteValue) {
    return `Black wins! - (High card: ${result[highestBlackValue]})`;
  }
  return `White wins! - (High card: ${result[highestWhiteValue]})`;
};