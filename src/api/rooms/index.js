import { RoomType } from './types';

const RoomsApi = {
    currId: 0,
    headers: new Headers({
        'Content-Type': 'application/json'
        
    }),
    async getById(id) {

        return Promise.resolve([{
            id: 0,
            name: 'Rm. 302',
            price: 2100,
            hotelId: RoomType.Economy
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