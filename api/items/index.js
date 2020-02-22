const AppRouter = require('../app-router');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const DataBaseController = require('../../controllers/db');

class ItemsRouter extends AppRouter {
    routes() {
        this.controller = new DataBaseController();

        this.router.get('/', (request, response) => {
            this.controller.getItems()
                .then(items => {
                response.send({items})
            });
        });
        this.router.get('/:itemId', (request, response) => {
            response.send(this.controller.getItem(request.params.itemId));
        });
        this.router.post('/', upload.single('item-image'), (request, response) => {
            this.controller.saveItem(request.body).then(dbResponse => {
                response.send(dbResponse);
            }).catch(reason => {
                response.status(reason.code).send(reason.message)
            }) 
        });
        this.router.delete('/:docId/:docRev', bodyParser.json(), (request, response) => {
            this.controller.removeItem(request.params.docId, request.params.docRev)
            .then(() => {
            response.send({})
        })
        })
        
    }
}

module.exports = ItemsRouter;
