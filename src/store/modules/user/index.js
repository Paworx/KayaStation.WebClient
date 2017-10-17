import { UserApi } from '@/api';
const user = {
    namespaced: true,
    state: {
        email: '',
        name: '',
        auth: {}
    },
    mutations: {
        signin(state, credentials) {
            let { email, name } = credentials;
            state.email = email;
            state.name = name;
        },
        
        logout(state) {
            state.email = '';
            state.name = '';
        },
        cacheTokens(state, {requestToken, refreshToken, expiresIn}){
            state.auth = Object.assign({}, state.auth, {
                requestToken: requestToken,
                refreshToken: refreshToken,
                expiresIn: expiresIn
            })
        }
    },
    actions: {
        async logout({state, commit, rootState}){
            commit('logout');
        },
        async signup({state, dispatch}, info){
            console.log(info)
            let success = await UserApi.signup(info)
            if(success){
                // get auth token
                return dispatch('cacheAuthToken')
            } else {
                return false
            }
        },
        async getAuthToken({state, commit}, credentials){
            let tokens;
            if(!state.auth.hasOwnProperty("requestToken")){
                tokens = await UserApi.getAuthToken(credentials)
                commit('cacheTokens', tokens)
            } else {
                tokens = state.auth;
            }

            return tokens;
        }
    }
}

export default user