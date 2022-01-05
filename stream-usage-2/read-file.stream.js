// @ts-check

const fs = require('fs');
const rs = fs.createReadStream('../local/big-file-2', {
  encoding: 'utf-8',
});

/** @type {Object.<string, number>} */
const numBlocksPerChar = {
  a: 0,
  b: 0,
};

/** @type {string | undefined} */
let prevChar;

rs.on('data', (data) => {
  if (typeof data !== 'string') return;

  for (let i = 0; i < data.length; i++) {
    if (data[i] !== prevChar) {
      const newChar = data[i];
      prevChar = newChar;
      numBlocksPerChar[newChar]++;
    }
  }
});

rs.on('end', () => {
  console.log('Event: end');
  console.log('blockCount', numBlocksPerChar);
});
