const http = require("../lib/http")
const get = new http().get

module.exports = {
    usernameToUUID: function(name) {
        return new Promise(async (res, rej) => {
            const user = await get(`https://api.mojang.com/users/profiles/minecraft/${name}`).catch((x) => {
                return rej(x)
            })
            return res(user.id)
        })
    }
}