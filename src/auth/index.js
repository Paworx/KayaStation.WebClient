const Auth = {
    async saveAccessToken(tokens){
        return new Promise((resolve, reject) => {
            localStorage.setItem("tokens", JSON.stringify(tokens))
            resolve(this.getAccessToken())
        })
    },
    async getAccessToken(){
        return new Promise((resolve, reject) => {
            let tokens = localStorage.getItem("tokens")
            let tokensObj = JSON.parse(tokens)
            resolve(tokensObj)
        })
    }
}

export { Auth }