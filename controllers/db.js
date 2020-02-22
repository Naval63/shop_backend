const PouchBD = require('pouchdb')
class DataBaseController {
    constructor() {
        this.db = new PouchBD('db')
    }
    getItems() {
        return this.db.allDocs({include_docs: true})
            .then(data => data.rows.map(item => item.doc));
    }

    saveItem(item) {
        if(item.name === undefined || item.count === undefined || item.price === undefined) {
            return Promise.reject({code: 400, message: 'Missing data'})
        }  
       return this.db.post(item);
    }

    removeItem(docId, docRev) {
        return this.db.remove(docId, docRev)
    }

    getItem(id) {
        return {
            id,
            name: 'Pączki',
            price: 3.2,
            count: 100,
        }
    }
}

module.exports = DataBaseController;
