import http, { Server } from 'http';
import config from './config';
import { RouterHandler, routes } from './helpers/RouterHandler';
import './routes';

function findDynamicRoute(method: string, url: string) {
  // Get all routes registered for the requested HTTP method.
  const methodRoutes = routes.get(method);
  if (!methodRoutes) return null;

  // Check each registered route to find a matching path.
  for (const [routePath, handler] of methodRoutes.entries()) {
    const routeParts: string[] = routePath.split('/');
    const urlParts: string[] = url.split('/');

    // Routes with different segment counts cannot match.
    if (routeParts.length !== urlParts.length) continue;

    const params: any = {};
    let matched = true;

    // Compare each path segment.
    // Dynamic segments (e.g. :id) are captured as route parameters,
    // while static segments must match exactly.
    for (let i = 0; i < routeParts.length; i++) {
      if (routeParts[i]?.startsWith(':')) {
        params[routeParts[i]!.substring(1)] = urlParts[i];
      } else if (routeParts[i] !== urlParts[i]) {
        matched = false;
        break;
      }
    }

    // Return the matched handler along with extracted parameters.
    if (matched) {
      return { handler, params };
    }
  }

  // No matching route was found.
  return null;
}

const server: Server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    console.log(`Received request: ${req.method} ${req.url}`);

    const method = req.method?.toUpperCase() || '';
    const path = req.url || '';

    const methodRoutes = routes.get(method);
    const handler: RouterHandler | undefined = methodRoutes?.get(path);

    if (handler) {
      handler(req, res);
    } else if (findDynamicRoute(method, path)) {
      const match = findDynamicRoute(method, path);
      (req as any).params = match?.params;
      match?.handler(req, res);
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
  }
);

server.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});
