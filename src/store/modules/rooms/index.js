import { RoomsApi } from '@/api';

const rooms = {
    namespaced: true,
    state: {
        all: []
    },
    mutations: {
        getById(state, params) {
            let { id, rooms } = params;
            console.log(rooms)
            state.all = rooms;
        },
        saveRooms(state, rooms){
            state.all = rooms
        },
        add(state, room) {
            console.log(room);
            state.all = state.all.concat(room);
        },
        update(state, room) {
            let lRoom = state.all.filter(lRoom => lRoom.id == room.id)
            lRoom = Object.assign({}, room)
        }
    },
    actions: {
        async getById({state, dispatch, commit}, id) {
            let rooms = await RoomsApi.getById(id);
            let params = {
                id: id,
                rooms: rooms
            };
            commit('getById', params);
            return Promise.resolve(params);
        },
        async saveRooms({state, dispatch, commit}, rooms){
            commit('saveRooms', rooms)
        },
        async add({state, dispatch, commit}, newRoom) {
            let room = await RoomsApi.add(newRoom);
            commit('add', room);
            return Promise.resolve(room);
        },
        async update({state, dispatch, commit}, room) {
            let upRoom = await RoomsApi.update(room)
            commit('update', room)
            return Promise.resolve(room)
        }
    }
}

export default rooms;