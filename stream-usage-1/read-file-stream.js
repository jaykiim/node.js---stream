// @ts-check

const fs = require('fs');
const rs = fs.createReadStream('../local/big-file', {
  encoding: 'utf-8',
});

let chunkCount = 0;

rs.on('data', (data) => {
  chunkCount++;
  console.log('Event: data', data[0]);
});

rs.on('end', () => {
  console.log('Event: end');
  console.log('chunkCount', chunkCount);
});
