import { HotelsApi } from '@/api';

const hotels = {
    namespaced: true,
    state: {
        currentHotel: {
            name: '',
            id: 0,
        }
    },
    mutations: {
        saveUserHotel (state, hotel){
            state.currentHotel = hotel
        }
    },
    actions: {
        async getByCurrentUser({state, dispatch, commit}){
            if(state.currentHotel.name != ''){
                return state.currentHotel
            } else {
                let hotel = await HotelsApi.getByCurrentUser()
                commit('saveUserHotel', hotel)
                return hotel;
            }
        }
    }
}

export default hotels;