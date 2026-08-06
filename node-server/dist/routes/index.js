"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RouterHandler_1 = __importDefault(require("../helpers/RouterHandler"));
const sendJson_1 = __importDefault(require("../helpers/sendJson"));
(0, RouterHandler_1.default)('GET', '/', (req, res) => {
    (0, sendJson_1.default)(res, 200, { message: 'Hello, World! from node.js with typescript' });
});
