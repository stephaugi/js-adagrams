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
  const DRAWTABLE = {A : 9,	N : 6, B : 2,	O : 8, C : 2,	P : 2,
    D : 4, Q : 1, E : 12,	R : 6, F : 2,	S : 4, G : 3,	T : 6,
    H : 2, U : 4, I : 9, V : 2, J : 1, W : 2, K : 1, X : 1,
    L : 4, Y : 2, M : 2, Z : 1
  };

  const drawPool = [];

  // create draw pool by iterating through each letter
  for (const [letter, quantity] of Object.entries(DRAWTABLE)) {

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

const countLetters = (letters) => {
  // takes an array as input and counts occurrence of each letter
  // returns object with key/value as letter/quantity

  let countObj = {};
  for (const letter of letters) {
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
  const SCORETABLE = {'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'L' : 1, 'N' : 1, 'R' : 1,
    'S' : 1, 'T' : 1, 'D' : 2, 'G' : 2, 'B' : 3, 'C' : 3, 'M' : 3, 'P' : 3,
    'F' : 4, 'H' : 4, 'V' : 4, 'W' : 4, 'Y' : 4, 'K' : 5, 'J' : 8, 'X' : 8,
    'Q' : 10, 'Z' : 10
  };

  // start with score at 0
  let totalScore = 0;

  // if the input is empty return 0
  if (!(word.length)) {
    return 0;
  }

  // if the word is 7 characters or longer, start with 8
  if(word.length >= 7) {
    totalScore = 8;
  }

  // count letters in word
  const countedLetters = countLetters(word.toUpperCase());

  for (const [letter, quantity] of Object.entries(countedLetters)) {
    // calculate score using quantity and letter's score
    totalScore += (SCORETABLE[letter] * quantity);
  }
  return totalScore;
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};

// const lettersInHand = ['D', 'O', 'G', 'L', 'X', 'X', 'X', 'X', 'X', 'X'];
// usesAvailableLetters('LOOL', lettersInHand);
scoreWord('');