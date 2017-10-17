import Vue from 'vue'
import Vuex from 'vuex';
import user from './modules/user';
import rooms from './modules/rooms';
import hotels from './modules/hotels';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        user: user,
        rooms: rooms,
        hotels: hotels
    }
})

export default store;