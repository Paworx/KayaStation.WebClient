import { Auth } from '@/auth'
import { RoomType } from './types';

const RoomsApi = {
    currId: 0,
    headers: {
        'Content-Type': 'application/json'
    },
    baseUrl: 'http://localhost:49690/api/v1/Rooms/',
    async getById(id) {
        let url = this.baseUrl + 'GetById/' + id
        let tokens = await Auth.getAccessToken()
        let headers = new Headers(Object.assign({}, this.headers, {
            'Authorization': 'Bearer ' + tokens.requestToken
        }))
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
        let url = this.baseUrl + 'Add'
        let tokens = await Auth.getAccessToken()
        let headers = new Headers(Object.assign({}, this.headers, {
            'Authorization': 'Bearer ' + tokens.requestToken
        }))
        let params = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(room)
        }
        console.log(params)
        let req = new Request(url, params)
        let res = fetch(req)
        let savedRoom = await res.then(response => {
            return response.json().then(room => room, err => [])
        })
        return savedRoom
    },
    async update(room){
        let url = this.baseUrl + 'Update/' + room.id
        let tokens = await Auth.getAccessToken()
        let headers = new Headers(Object.assign({}, this.headers, {
            'Authorization': 'Bearer ' + tokens.requestToken
        }))
        let params = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(room)
        }
        let req = new Request(url, params)
        let res = fetch(req)
        let upRoom = await res.then(response => {
            return response.json().then(room => room, err => [])
        })
        return upRoom
    },
    async delete(id){
        let url = this.baseUrl + 'Delete/' + id
        let tokens = await Auth.getAccessToken()
        let headers = new Headers(Object.assign({}, this.headers, {
            'Authorization': 'Bearer ' + tokens.requestToken
        }))
        let params = {
            method: 'POST',
            headers: headers
        }
        let req = new Request(url, params)
        let res = fetch(req)
        let status = await res.then(response => {
            return response.ok
        })
        
        return status
    }
}

export { RoomsApi };