import addRoutes from '../helpers/RouterHandler';
import sendJson from '../helpers/sendJson';
import parseBody from '../helpers/parseBody';
import { writeUsers } from '../helpers/fileDb';
import { readUsers } from '../helpers/fileDb';

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

addRoutes('POST', '/users', async (req, res) => {
  try {
    const body = await parseBody(req);
    const users = readUsers();
    const newUser = {
      ...body,
    };
    users.push(newUser);
    writeUsers(users);
    sendJson(res, 201, { success: true, message: 'User created', data: body });
  } catch (err: any) {
    console.log('Error processing request:', err);
  }
});
