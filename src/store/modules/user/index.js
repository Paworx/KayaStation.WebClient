const user = {
    namespaced: true,
    state: {
        email: ''
    },
    mutations: {
        signin(state, user) {
            let {email, password } = user;
            state.email = email;
        }
    },
    actions: {
        signin ({state, commit}, user) {
            commit('signin', user);
        }
    }
}

export default user