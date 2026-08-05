import http, { Server } from 'http';
import config from './config';

const server: Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(`Received request: ${req.method} ${req.url}`);

    if (req.method === 'GET' && req.url === '/') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          message: 'Hello, World! from node.js with typescript',
        })
      );
    }
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
