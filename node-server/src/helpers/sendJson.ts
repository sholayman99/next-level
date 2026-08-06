import { ServerResponse } from 'http';

function sendJson(res: ServerResponse, statusCode: number, data: any): void {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(
    JSON.stringify({
      message: 'Hello, World! from node.js with typescript',
    })
  );
}
