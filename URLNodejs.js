// const url = require('url');
// const address = url.parse("https://chat.openai.com/c/d32f5327-c240-4f89-9194-62ebc1173be0")
// // const address = url.parse("https://www.youtube.com/feed/history")
// address.toJSON;

// console.log(address);

// var qurreyString = require('querystring')   
// var q = qurreyString.stringify({ year: 2000, month: 2 });
// console.log(q);
// var p = qurreyString.escape({ year: 2000, month: 5 });
// console.log(p);

// var c = qurreyString.unescape({ year: 2000, month: 5 });
// console.log(c);

// var d = qurreyString.decode({ year: 2000, month: 5 });
// console.log(d);

// var s = qurreyString.encode({ year: 2000, month: 5 });
// console.log(s);




const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello, world! This is my URL: http://${hostname}:${port}/`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
