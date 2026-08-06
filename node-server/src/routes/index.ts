import addRoutes from '../helpers/RouterHandler';
import sendJson from '../helpers/sendJson';

addRoutes('GET', '/', (req, res) => {
  sendJson(res, 200, {
    message: 'Hello, World! from node.js with typescript',
    path: req.url,
    method: req.method,
  });
});

addRoutes('GET', '/api', (req, res) => {
  sendJson(res, 200, {
    status: 'Health ok',
    path: req.url,
    method: req.method,
  });
});
