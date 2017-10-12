const UserApi = {
    baseUrl : 'http://localhost:49690/api/v1/',
    accountUrl: this.baseUrl + 'Account',
    async signin(user){
        return Promise.resolve({
            name: 'Queensland',
            email: user.email
        })
    },
    async signup(user) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        })
        let params = {
            method: 'POST',
            headers: headers
        }
        let request = new Request(this.accountUrl, params)
        let response = fetch(request)
        return response.then( res => res.json())
    }
};

export { UserApi };