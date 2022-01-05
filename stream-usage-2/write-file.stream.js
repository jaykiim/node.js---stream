// @ts-check

const fs = require('fs');
const ws = fs.createWriteStream('../local/big-file-2');

const NUM_BLOCKS = 500;

/** @type {Object.<string, number>} */
const numBlocksPerChar = {
  a: 0,
  b: 0,
};

for (let i = 0; i < NUM_BLOCKS; i++) {
  const blockLength = Math.floor(800 + Math.random() * 200); // 800 ~ 1000 사이의 정수
  const char = i % 2 === 0 ? 'a' : 'b';
  ws.write(char.repeat(1024 * blockLength));

  numBlocksPerChar[char]++;
}

console.log(numBlocksPerChar);
