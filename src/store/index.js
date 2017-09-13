import Vuex from 'vuex';
import user from './modules/user';
const store = new Vuex.Store({
    modules: {
        user: user
    }
})

export default store;