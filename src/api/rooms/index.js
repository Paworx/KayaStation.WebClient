import { RoomType } from './types';

const RoomsApi = {
    async getById(id) {
        return Promise.resolve([{
            Id: 0,
            Name: 'Rm. 302',
            Price: 2100,
            Type: RoomType.Economy
        }])
    }
}

export { RoomsApi };