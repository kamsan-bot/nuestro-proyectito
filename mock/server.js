import http from 'http';
import fs from 'fs';
import path from 'path';

const dbPath = path.resolve('./mock/db.json');
const port = process.env.PORT || 4000;

function sendJSON(res, data) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/' || url === '/db') {
    const raw = fs.readFileSync(dbPath, 'utf-8');
    sendJSON(res, JSON.parse(raw));
    return;
  }

  // /db/features etc
  if (url.startsWith('/db/')) {
    const raw = fs.readFileSync(dbPath, 'utf-8');
    const db = JSON.parse(raw);
    const key = url.replace('/db/', '').split('/')[0];
    if (db[key]) {
      sendJSON(res, db[key]);
      return;
    }
  }

  // serve static mock images from public/img
  if (url.startsWith('/img/')) {
    const imgPath = path.resolve('./public' + url);
    if (fs.existsSync(imgPath)) {
      const stream = fs.createReadStream(imgPath);
      res.setHeader('Content-Type', 'image/png');
      stream.pipe(res);
      return;
    }
  }

  res.statusCode = 404;
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`Mock server running at http://localhost:${port}/db`);
});
