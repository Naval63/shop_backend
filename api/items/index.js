const AppRouter = require('../app-router');
const bodyParser = require('body-parser');
const DataBaseController = require('../../controllers/db');

class ItemsRouter extends AppRouter {
    routes() {
        this.controller = new DataBaseController();

        this.router.get('/', (request, response) => {
            const items = this.controller.getItems();
            response.send({items});
        });
        this.router.get('/:itemId', (request, response) => {
            response.send(this.controller.getItem(request.params.itemId));
        });
        this.router.post('/', bodyParser.json(), (request, response) => {
            response.send(request.body);
        });
    }
}

module.exports = ItemsRouter;
