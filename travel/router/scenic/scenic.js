const https = require('https')
function scenic(response, place) {
    let data = ''
    let options = {
        hostname: 'm.ctrip.com',
        port: '443',
        path: '/restapi/soa2/18254/json/getAttractionList',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    let req = https.request(options, (res) => {
        res.on('data', (chunk) => {
            data += chunk
        })
        res.on('end', () => {
            // console.log(data);
            response(data)
        })
    })
    req.write(JSON.stringify(
        { "index": 1, "count": 10, "sortType": 1, "isShowAggregation": true, "districtId": place, "scene": "DISTRICT", "pageId": "214062", "traceId": "ec81ac22-f3f4-db18-c07d-1683384a74e6", "extension": [{ "name": "osVersion", "value": "14.6" }, { "name": "deviceType", "value": "ios" }], "filter": { "filterItems": [] }, "crnVersion": "2020-09-01 22:00:45", "isInitialState": true, "head": { "cid": "09031123219046942592", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": "", "xsid": "", "extension": [] } }
    ))
    req.end()
}

module.exports = {
    scenic
}