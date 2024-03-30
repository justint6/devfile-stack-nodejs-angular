const  express  =  require('express');
const app = express();
const http = require('http');
const fs = require('fs');

app.use(express.static('./dist/devfile-stack-nodejs-angular'));

app.get('/', (req, res) => {
    res.send('starting application!');
});
http.createServer({
        }, app).listen(8080, () => console.log('test app  listening on port 8080!'));
