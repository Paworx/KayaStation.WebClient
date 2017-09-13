import userApi from '@/api/user';
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
        }
    },
    actions: {
        async signin ({state, commit}, user) {
            let credentials = await userApi.signin(user);
            commit('signin', credentials);
        }
    }
}

export default user