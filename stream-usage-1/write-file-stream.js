// @ts-check

const fs = require('fs');
const ws = fs.createWriteStream('../local/big-file');
const NUM_MBYTES = 500;

for (let i = 0; i < NUM_MBYTES; i++) {
  ws.write('a'.repeat(1024 * 1024)); // a를 한번만 쓰면 1바이트, 1024번 쓰면 1KB, 그걸 다시 1024번을 쓰면 1MB
}

ws.write('Hello, world!');
