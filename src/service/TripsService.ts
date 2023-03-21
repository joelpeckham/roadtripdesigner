export const TripsService = {
    getTripsData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'bamboo-watch.jpg',
                date: '2019-01-01',
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'black-watch.jpg',
                date: '2019-02-02',
            },
            
        ];
    },

    getTrips() {
        return Promise.resolve(this.getTripsData());
    },
};

