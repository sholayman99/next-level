import http, { Server } from 'http';
import config from './config';
import { RouterHandler, routes } from './helpers/RouterHandler';
import './routes';

const server: Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(`Received request: ${req.method} ${req.url}`);

    const method = req.method?.toUpperCase() || '';
    const path = req.url || '';

    const methodRoutes = routes.get(method);
    const handler: RouterHandler | undefined = methodRoutes?.get(path);

    if (handler) {
      handler(req, res);
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          success: false,
          error: 'Route Not Found',
          path: path,
          method: method,
        })
      );
    }

    // if (req.method === 'GET' && req.url === '/') {
    //   res.writeHead(200, { 'Content-Type': 'application/json' });
    //   res.end(
    //     JSON.stringify({
    //       message: 'Hello, World! from node.js with typescript',
    //     })
    //   );
    // }

    // if (req.method === 'GET' && req.url === '/health') {
    //   res.writeHead(200, { 'Content-Type': 'application/json' });
    //   res.end(JSON.stringify({ status: 'ok' }));
    // }

    // if (req.method === 'GET' && req.url === '/config') {
    //   res.writeHead(200, { 'Content-Type': 'application/json' });
    //   res.end(JSON.stringify(config));
    // }

    // if (req.method === 'GET' && req.url === '/error') {
    //   res.writeHead(500, { 'Content-Type': 'application/json' });
    //   res.end(JSON.stringify({ error: 'Internal Server Error' }));
    // }

    // if (req.method === 'GET' && req.url === '/not-found') {
    //   res.writeHead(404, { 'Content-Type': 'application/json' });
    //   res.end(JSON.stringify({ error: 'Not Found' }));
    // }

    // if (req.method === 'GET' && req.url === '/redirect') {
    //   res.writeHead(302, { Location: '/' });
    //   res.end();
    // }

    // if (req.method === 'GET' && req.url === '/timeout') {
    //   setTimeout(() => {
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify({ message: 'Request completed after timeout' }));
    //   }, 5000);
    // }

    // if (req.method === 'POST' && req.url === '/users') {
    //   let body = '';
    //   req.on('data', (chunk) => {
    //     body += chunk.toString();
    //   });
    //   req.on('end', () => {
    //     try {
    //       res.writeHead(200, { 'Content-Type': 'application/json' });
    //       res.end(JSON.stringify({ message: 'User created:', data: body }));
    //     } catch (err: any) {
    //       console.log('Error processing request:', err);
    //     }
    //   });
    // }
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
