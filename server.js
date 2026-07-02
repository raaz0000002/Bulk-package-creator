const http = require('http');
const fs = require('fs');
const path = require('path');

const START_PORT = Number(process.env.PORT) || 3000;
const MAX_PORT_ATTEMPTS = 20;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Normalize URL path to map to workspace files
  let safeUrl = req.url.split('?')[0];
  if (safeUrl === '/') {
    safeUrl = '/index.html';
  }

  const filePath = path.join(__dirname, safeUrl);

  // Check if file is inside current directory
  if (!filePath.startsWith(__dirname)) {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('File Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.statusCode = 200;
    res.setHeader('Content-Type', contentType);

    const stream = fs.createReadStream(filePath);
    stream.on('error', (streamErr) => {
      console.error(streamErr);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Internal Server Error');
      }
    });
    stream.pipe(res);
  });
});

function startServer(port, attemptsLeft = MAX_PORT_ATTEMPTS) {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE' && attemptsLeft > 0) {
      console.log(`Port ${port} is in use, trying ${port + 1}...`);
      startServer(port + 1, attemptsLeft - 1);
      return;
    }

    console.error(err);
    process.exit(1);
  });

  server.listen(port, () => {
    server.removeAllListeners('error');
    console.log(`\n==================================================`);
    console.log(`  Travel Parser Server is running!`);
    console.log(`  URL: http://localhost:${port}`);
    console.log(`  Press Ctrl+C to stop`);
    console.log(`==================================================\n`);
  });
}

startServer(START_PORT);
