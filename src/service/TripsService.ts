export const TripsService = {
    getTripsData() {
        return [
            {
                id: '1000',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'https://source.unsplash.com/random/300×300',
                date: '2019-01-01',
            },
            {
                id: '1001',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'https://source.unsplash.com/random/301×301',
                date: '2019-02-02',
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'https://source.unsplash.com/random/300×300',
                date: '2019-01-01',
            },
            {
                id: '1001',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'https://source.unsplash.com/random/301×301',
                date: '2019-02-02',
            },
            {
                id: '1000',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'https://source.unsplash.com/random/300×300',
                date: '2019-01-01',
            },
            {
                id: '1001',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'https://source.unsplash.com/random/301×301',
                date: '2019-02-02',
            },{
                id: '1000',
                name: 'Bamboo Watch',
                description: 'Product Description',
                image: 'https://source.unsplash.com/random/300×300',
                date: '2019-01-01',
            },
            {
                id: '1001',
                name: 'Black Watch',
                description: 'Product Description',
                image: 'https://source.unsplash.com/random/301×301',
                date: '2019-02-02',
            },
            
        ];
    },

    getTrips() {
        return Promise.resolve(this.getTripsData());
    },
};

