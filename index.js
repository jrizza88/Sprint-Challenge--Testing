const server = require('./games-api/server');

const port = process.env.PORT || 7000;

server.listen(port, () => console.log(`server is listening on port \n --**-- ${port} --**--\n`));