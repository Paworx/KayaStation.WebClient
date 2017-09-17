import { RoomType } from './types';

const RoomsApi = {
    currId: 0,
    async getById(id) {
        return Promise.resolve([{
            Id: 0,
            Name: 'Rm. 302',
            Price: 2100,
            Type: RoomType.Economy
        }])
    },
    async add(room){
        let roomWithId = Object.assign({}, room, {
            Id: ++ this.currId
        })
        return Promise.resolve(roomWithId)
    }
}

export { RoomsApi };