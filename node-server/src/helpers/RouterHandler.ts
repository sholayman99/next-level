import { IncomingMessage, ServerResponse } from 'http';

export type RouterHandler = (req: IncomingMessage, res: ServerResponse) => void;

// Stores all registered routes.
// Structure:
// {
//   "GET"  => { "/users" => handler, "/posts" => handler },
//   "POST" => { "/users" => handler }
// }
export const routes: Map<string, Map<string, RouterHandler>> = new Map();

function addRoutes(method: string, path: string, handler: RouterHandler): void {
  // If this HTTP method (e.g., GET, POST) doesn't exist yet,
  // create a new map to hold its routes.
  if (!routes.has(method)) {
    routes.set(method, new Map());
  }

  // Register or overwrite the handler for the given path
  // under the specified HTTP method.
  routes.get(method)!.set(path, handler);
}

export default addRoutes;
