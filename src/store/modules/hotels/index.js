import { HotelsApi } from '@/api';

const hotels = {
    namespaced: true,
    state: {
        currentHotel: null
    },
    mutations: {
        saveUserHotel (state, hotel){
            state.currentHotel = hotel
        }
    },
    actions: {
        async getByCurrentUser({state, dispatch}, {requestToken}){
            if(state.currentHotel != null){
                return state.currentHotel
            } else {
                let hotel = await HotelsApi.getByCurrentUser(requestToken)
                commit('saveUserHotel', hotel)
                return hotel;
            }
        }
    }
}

export default hotels;