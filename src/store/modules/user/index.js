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
        async signin({state, commit}, credentials){
            // get tokens and cache them
            let tokens = await UserApi.getAuthToken(credentials)
            // cache them tokens
            let cachedTokens = await new Promise((resolve, reject) => {
                localStorage.setItem('tokens', JSON.stringify(tokens));
                resolve(tokens)
            })
            commit('cacheTokens', cachedTokens)
            return cachedTokens;
        },
        async getAuthToken({state, commit}, credentials){
            let tokens;
            // check if token is not in state
            if(!state.auth.hasOwnProperty("requestToken")){
                // check if token already in storage
                let storageTokens = await Promise.resolve(localStorage.getItem('tokens'))
                if(storageTokens != null){
                    // if in storage
                    let storageTokensObj = JSON.parse(storageTokens)
                    commit('cacheTokens', storageTokensObj)
                    return storageTokensObj
                }
            } else {
                // if tokens are in state auth
                tokens = state.auth;
            }

            return tokens;
        }
    }
}

export default user