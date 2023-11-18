function fQuery(query) {
    query = String(query).replace("?", "")
    query = String(query).split("&")
    let out = []
    for(let i=0;i<query.length;i++) {
        let v=query[i].split("=")
        out[i]=[v[0],v[1]]
    }
    return out.flat()
}

function aQuery(query) {
    let a;
    for(let i=0;i<query.length;i++) {
        if(!a) a = `?${query[i][0]}=${query[i][1]}`
        else a = a + `&${query[i][0]}=${query[i][1]}`
    }
    return a
}

module.exports = {
    fQuery,
    aQuery
}