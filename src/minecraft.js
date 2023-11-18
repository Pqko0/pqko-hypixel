const http = require("../lib/http")
const get = new http().get

class minecraft {
    usernameToUUID(username) {
        return new Promise(async (res, rej) => {
            const user = await get(`https://api.mojang.com/users/profiles/minecraft/${username}`).catch((x) => {
                return rej(x)
            })
            return res(user)
        })
    }
    
    getAvatarOfUUID(uuid) {
        return new Promise(async (resolve, reject) => {
            const avatar = await get(`https://crafatar.com/avatars/${uuid}`).catch((x) => {
                return reject(x)
            })
            return resolve(avatar)
        })
    }
    
    getHeadOfUUID(uuid) {
        return new Promise(async (resolve, reject) => {
            const head = await get(`https://crafatar.com/renders/head/${uuid}`).catch((x) => {
                return reject(x)
            })
            return resolve(head)
        })
    }
    
    getBodyOfUUID(uuid) {
        return new Promise(async (resolve, reject) => {
            const body = await get(`https://crafatar.com/renders/body/${uuid}`).catch((x) => {
                return reject(x)
            })
            return resolve(body)
        })
    }
}

module.exports = minecraft