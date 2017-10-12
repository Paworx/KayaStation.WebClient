import { UserApi } from '@/api';
const user = {
    namespaced: true,
    state: {
        email: '',
        name: ''
    },
    mutations: {
        signin(state, credentials) {
            let { email, name } = credentials;
            state.email = email;
            state.name = name;
        },
        async signup(state, info){
            let success = await UserApi.signup(info)
        },
        logout(state) {
            state.email = '';
            state.name = '';
        }
    },
    actions: {
        async signin ({state, commit}, user) {
            let credentials = await UserApi.signin(user);
            commit('signin', credentials);
        },
        async logout({state, commit, rootState}){
            commit('logout');
        }
    }
}

export default user