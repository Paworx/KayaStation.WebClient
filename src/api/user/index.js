const UserApi = {
    async signin(user){
        return Promise.resolve({
            name: 'Queensland',
            email: user.email
        })
    }
};

export { UserApi };