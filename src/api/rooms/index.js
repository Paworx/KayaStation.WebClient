import { Auth } from '@/auth'
import { RoomType } from './types';

const RoomsApi = {
    currId: 0,
    headers: new Headers({
        'Content-Type': 'application/json'
        
    }),
    baseUrl: 'http://localhost:49690/api/v1/Rooms/',
    async getById(id) {
        let url = this.baseUrl + 'GetById/' + id
        let tokens = await Auth.getAccessToken()
        let headers = Object.assign({}, this.headers, {
            'Authorization': 'Bearer ' + tokens.requestToken
        })
        let params = {
            method: 'GET',
            headers: headers
        }
        let req = new Request(url, params)
        let res = fetch(req)
        let rooms = await res.then(response => {
            return response.json().then(rooms => rooms, err => [])
        }, err => [])
        return rooms
    },
    async add(room){
        let roomWithId = Object.assign({}, room, {
            Id: ++ this.currId
        })
        return Promise.resolve(roomWithId)
    }
}

export { RoomsApi };