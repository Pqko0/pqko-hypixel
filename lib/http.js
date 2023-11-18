const axios = require("axios").default;
const query = require("./query")

class http {
    constructor(key) {
        this.key = key;
    }

    get(url, body) {
        return new Promise((res, rej) => {
            axios.get(url, body).then((x) => {
                return res(x.data)
            }).catch((x) => {
                return res(x.response.data)
            })
        })
    }

    hget(url, body) {
        url = url.split("?")
        const qUrl = `https://api.hypixel.net/v2${url[0]}${url[1] !== undefined? query.aQuery([["key", this.key], query.fQuery(url[1])]) : query.aQuery([["key", this.key]])}`
        return new Promise((res, rej) => {
            axios.get(qUrl, body).then((x) => {
                return res(x.data)
            }).catch((x) => {
                return res(x.response.data)
            })
        })
    }
}

module.exports = http;