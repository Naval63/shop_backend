class DataBaseController {
    getItems() {
        return [{id: '1', name: 'foo', count: '10'}];
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
