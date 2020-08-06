const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleswares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middleswares);
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running in ${port}`);
});