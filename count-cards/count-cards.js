let count = 0;

const table = {
  2: 1, 3: 1, 4: 1, 5: 1, 6: 1,
  7: 0, 8: 0, 9: 0,
  10: -1, 'J': -1, 'Q': -1, 'K': -1, 'A': -1
};

const checkAction = (score) => {
  return score < 1 ? "Hold" : "Bet";
};

const cc = (card) => {
  return `${count += table[card]} ${checkAction(count)}`;
};
