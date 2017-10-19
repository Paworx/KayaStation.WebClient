import { Auth } from '@/auth'
const HotelsApi = {
    baseUrl: "http://localhost:49690/api/v1/Hotels/",
    headers: new Headers({
        'Content-Type': 'application/json'
    }),
    async getByCurrentUser (requestToken){
        let currUserUrl = this.baseUrl + "GetByCurrentUser";
        let tokens = await Auth.getAccessToken()
        let headers = Object.assign({}, this.headers, {
           'Authorization': `Bearer ${tokens.requestToken}`
        });
        let params = {
            method: "GET",
            headers: headers
        }

        let req = new Request(currUserUrl, params)
        let res = fetch(req)
        return res.then(data => data.json())
    }


}

export {HotelsApi};