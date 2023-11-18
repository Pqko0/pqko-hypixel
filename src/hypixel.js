const query = require("../lib/query")
const client = require("../lib/client")
const http = require("../lib/http")

class hypixel {
    constructor (key) {
        this.key = key
        this.http = new http(key)
    }

    playerlookupByUUID (uuid) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/player" + query.aQuery([["uuid", uuid]]))
            return res(req)
        })
    }

    playerlookupByName (name) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/player" + query.aQuery([["uuid", await client.usernameToUUID(name)]]))
            return res(req)
        })
    }

    recentGamesByUUID (uuid) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/recentgames" + query.aQuery([["uuid", uuid]]))
            return res(req)
        })
    }

    recentGamesByName (name) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/recentgames" + query.aQuery([["uuid", await client.usernameToUUID(name)]]))
            return res(req)
        })
    }

    statusByUUID (uuid) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/status" + query.aQuery([["uuid", uuid]]))
            return res(req)
        })
    }

    statusByName (name) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/status" + query.aQuery([["uuid", await client.usernameToUUID(name)]]))
            return res(req)
        })
    }

    playerGuildByUUID (uuid) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/guild" + query.aQuery([["uuid", uuid]]))
            return res(req)
        })
    }

    playerGuildByID (id) { // ObjectID
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/guild" + query.aQuery([["id", id]]))
            return res(req)
        })
    }

    playerGuildByName (name) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/guild" + query.aQuery([["uuid", await client.usernameToUUID(name)]]))
            return res(req)
        })
    }

    getGames() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/games")
            return res(req)
        })
    }

    getAchievements() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/achievements")
            return res(req)
        })
    }

    getChallenges() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/challenges")
            return res(req)
        })
    }

    getQuests() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/quests")
            return res(req)
        })
    }

    getGuildAchievements() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/guilds/achievements")
            return res(req)
        })
    }

    getVanityPets() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/vanity/pets")
            return res(req)
        })
    }

    getVanityCompanions() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/vanity/companions")
            return res(req)
        })
    }

    getSkyblockCollections() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/skyblock/collections")
            return res(req)
        })
    }

    getSkyblockSkills() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/skyblock/skills")
            return res(req)
        })
    }

    getSkyblockItems() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/skyblock/items")
            return res(req)
        })
    }

    getSkyblockElectionsOrMayor() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/skyblock/election")
            return res(req)
        })
    }

    getSkyblockBingo() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/resources/skyblock/bingo")
            return res(req)
        })
    }

    skyblockNews() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/news")
            return res(req)
        })
    }

    getUserAuctionByUUID(uuid) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/auction" + query.aQuery("uuid", uuid))
            return res(req)
        })
    }

    getUserAuctionByName(name) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/auction" + query.aQuery("uuid", await client.usernameToUUID(name)))
            return res(req)
        })
    }

    getLastAuctionsFromSixtySeconds() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/auctions_ended")
            return res(req)
        })
    }

    getBazaar() {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/bazaar")
            return res(req)
        })
    }

    getSkyblockProfileByUUID(uuid) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/profile" + query.aQuery("uuid", uuid))
            return res(req)
        })
    }

    getSkyblockProfileByName(name) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/profile" + query.aQuery("uuid", await client.usernameToUUID(name)))
            return res(req)
        })
    }

    getSkyblockProfilesByUUID(uuid) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/profiles" + query.aQuery("uuid", uuid))
            return res(req)
        })
    }

    getSkyblockProfilesByName(name) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/profiles" + query.aQuery("uuid", await client.usernameToUUID(name)))
            return res(req)
        })
    }

    getMuseumDataByUUID(uuid) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/museum" + query.aQuery("uuid", uuid))
            return res(req)
        })
    }

    getMuseumDataByName(name) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/museum" + query.aQuery("uuid", await client.usernameToUUID(name)))
            return res(req)
        })
    }

    getSkyblockBingoByUUID(uuid) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/bingo" + query.aQuery("uuid", uuid))
            return res(req)
        })
    }

    getSkyblockBingoByName(name) {
        return new Promise(async(res, rej) => {
            const req = await this.http.hget("/skyblock/bingo" + query.aQuery("uuid", await client.usernameToUUID(name)))
            return res(req)
        })
    }
}

module.exports = hypixel