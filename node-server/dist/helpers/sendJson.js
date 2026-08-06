"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendJson(res, statusCode, data) {
    res.writeHead(statusCode, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
}
exports.default = sendJson;
