"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
// Stores all registered routes.
// Structure:
// {
//   "GET"  => { "/users" => handler, "/posts" => handler },
//   "POST" => { "/users" => handler }
// }
exports.routes = new Map();
function addRoutes(method, path, handler) {
    // If this HTTP method (e.g., GET, POST) doesn't exist yet,
    // create a new map to hold its routes.
    if (!exports.routes.has(method)) {
        exports.routes.set(method, new Map());
    }
    // Register or overwrite the handler for the given path
    // under the specified HTTP method.
    exports.routes.get(method).set(path, handler);
}
exports.default = addRoutes;
