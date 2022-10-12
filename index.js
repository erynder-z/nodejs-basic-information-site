/* const http = require('http');
const fs = require('fs');
const url = require('url');

const error404 = fs.readFileSync('404.html', 'utf-8', (err, data) => {
  if (err) throw err;
  return data;
});

http
  .createServer(function (req, res) {
    const q = url.parse(req.url, true);
    let filename = '';

    if (q.pathname === '/') {
      filename = '.' + '/index.html';
    } else {
      filename = '.' + q.pathname + '.html';
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(error404);
        return res.end();
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      return res.end();
    });
  })
  .listen(8080);
 */

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use((req, res) => {
  res.status(404);
  res.sendFile(path.join(__dirname, 'public/404.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${PORT}`);
});
