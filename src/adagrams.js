export const drawLetters = () => {
  // create draw pool
  const drawPool = createDrawPool();
  const hand = [];

  // draw 10 random tiles from this draw pool
  for (let i = 0; i < 10; i++) {
    let tile = drawTile(drawPool);

    hand.push(tile);
  }
  return hand;
};

const createDrawPool = () => {
  const drawTable = {A : 9,	N : 6, B : 2,	O : 8, C : 2,	P : 2,
    D : 4, Q : 1, E : 12,	R : 6, F : 2,	S : 4, G : 3,	T : 6,
    H : 2, U : 4, I : 9, V : 2, J : 1, W : 2, K : 1, X : 1,
    L : 4, Y : 2, M : 2, Z : 1
  };

  const drawPool = [];

  // create draw pool by iterating through each letter
  for (const [letter, quantity] of Object.entries(drawTable)) {

    // add the letter to the draw pool by quantity
    for(let i = 0; i < quantity; i++) {
      drawPool.push(letter);
    }
  }
  return drawPool;
};

const drawTile = drawPool => {
  // randomly selects tile
  let randNum = Math.floor(Math.random() * drawPool.length);
  let selectedTile = drawPool[randNum];

  // swaps selected tile with last tile and removes
  drawPool[randNum] = drawPool[drawPool.length-1];
  drawPool[drawPool.length-1] = selectedTile;

  return drawPool.pop();
};

export const usesAvailableLetters = (input, lettersInHand) => {
  // count # of each letter in hand
  const lettersInHandCounted = countLetters(lettersInHand);

  // check if each letter in input is in hand
  for (let letter of input) {

    // if letter is in hand remove 1 from the hand to use
    if ((letter in lettersInHandCounted)) {
      lettersInHandCounted[letter] -= 1;

      // if there are 0 left in hand, remove letter from hand
      if (lettersInHandCounted[letter] == 0) {
        delete lettersInHandCounted[letter];
      }
    } else {
      return false;
    }
  }
  return true;
};

const countLetters = (lettersInHand) => {
  let countObj = {};
  for (const letter of lettersInHand) {
    // add letter to counter if it isn't in there, otherwise increment
    if (!(letter in countObj)) {
      countObj[letter] = 1;
    } else {
      countObj[letter] += 1;
    }
  }
  return countObj;
};

export const scoreWord = (word) => {
  // Implement this method for wave 3

};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

const lettersInHand = ['D', 'O', 'G', 'L', 'X', 'X', 'X', 'X', 'X', 'X'];
usesAvailableLetters('LOOL', lettersInHand);
