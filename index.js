const express = require('express');
const PORT = 3000;
const ApiRouter = require('./api');

class NodeApp {
    constructor() {
        this.app = express();
        this.app.get('/', (request, response) => {
            response.send('It works!');
        });
        this.app.use('/api', new ApiRouter().router);
        this.start();
    }

    start() {
        this.app.listen(PORT, (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log(`App has been started and listen at ${PORT} port`);
            }
        });
    }
}

const nodeApp = new NodeApp();
