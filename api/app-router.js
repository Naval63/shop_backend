const express = require('express');

class AppRouter {
    constructor() {
        this.router = express.Router();
        this.routes();
    }

    routes() {
    }
}

module.exports = AppRouter;
