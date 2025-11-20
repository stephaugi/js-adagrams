export const drawLetters = () => {
  // create draw pool
  const drawPool = createDrawPool();
  const hand = [];

  // draw 10 random tiles from this draw pool
  for (let i = 0; i < 10; i++) {
    let tile = drawTile(drawPool);

    hand.push(tile);
  };
  return hand;
};

const createDrawPool = () => {
  const drawTable = {A : 9,	N : 6, B : 2,	O : 8, C : 2,	P : 2,
    D : 4, Q : 1, E : 12,	R : 6, F : 2,	S : 4, G : 3,	T : 6,
    H : 2, U : 4, I : 9, V : 2, J : 1, W : 2, K : 1, X : 1,
    L : 4, Y : 2, M : 2, Z : 1
  };

  const drawPool = [];

  for (const [letter, quantity] of Object.entries(drawTable)) {
    for(let i = 0; i < quantity; i++) {
      drawPool.push(letter);
    };
  };
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
}

export const usesAvailableLetters = (input, lettersInHand) => {
  // Implement this method for wave 2
};

export const scoreWord = (word) => {
  // Implement this method for wave 3
};

export const highestScoreFrom = (words) => {
  // Implement this method for wave 4
};
