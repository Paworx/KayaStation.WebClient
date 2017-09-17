import { RoomsApi } from '@/api';

const rooms = {
    namespaced: true,
    state: {
        all: []
    },
    mutations: {
        getById(state, params) {
            let { id, rooms } = params;
            state.all = rooms;
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
        async add({state, dispatch, commit}, newRoom) {
            let room = await RoomsApi.add(newRoom);

            return Promise.resolve(room);
        }
    }
}

export default rooms;