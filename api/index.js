const ItemsRouter = require('./items');
const AppRouter = require('./app-router');

class ApiRouter extends AppRouter {
    routes() {
        this.router.use('/items', ApiRouter.checkToken, new ItemsRouter().router);
    }

    static checkToken(request, response, next) {
        const token = request.get('Authorization');
        if (token) {
            next();
        } else {
            response.status(403).send('Forbidden');
        }
    }
}

module.exports = ApiRouter;
