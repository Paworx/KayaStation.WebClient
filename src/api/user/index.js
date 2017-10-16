const UserApi = {
    baseUrl : 'http://localhost:49690/api/v1/Account/',
    authUrl: 'AuthToken',
    registerUrl: 'Register',
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    async signin(user){
        return Promise.resolve({
            name: 'Queensland',
            email: user.email
        })
    },
    async signup(user) {
        let params = {
            body: JSON.stringify(user),
            method: 'POST',
            headers: this.headers
        }
        let request = new Request(this.baseUrl + this.registerUrl, params)
        let response = fetch(request)
        return response.then( res => res.json())
    },
    async getAuthToken({email, password}){
        let body = {
            email: email,
            password: password
        }
        let params = {
            body: JSON.stringify(body),
            method: 'POST',
            headers: this.headers
        }
        let request = new Request(this.baseUrl + this.authUrl, params)
        let response = fetch(request)
        return response.then(res => res.json())
    }
};

export { UserApi };