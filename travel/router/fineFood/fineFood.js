const https = require('https')
function fineFood(response,place) {
    let data = ''
    let options = {
        hostname: 'm.ctrip.com',
        port: '443',
        path: '/restapi/soa2/10332/GetHomePageRestaruantListV706',
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
        { "ChoiceGoodFilter": 0, "CuisineFilter": [], "CurrentDestId": 0, "DistanceFilter": 0, "FoodFilters": [], "GeoType": "", "IsBusinessOpen": false, "IsMeiShiLin": true, "IsOnlyList": false, "IsOnlyFilter": false, "Lat": 0, "Lon": 0, "MeiShiLinRestFilter": 0, "IsGourmetlistNominated": false, "IsThemeRanking": false, "MeiShiLinTypes": [], "PriceFilter": [], "SceneFilter": [], "SellFilter": [], "OrderType": 0, "MetroId": 0, "PageIndex": 1, "PageSize": 10, "ParentPoiId": 0, "PositionLat": 0, "PositionLon": 0, "RegionId": 0, "RestClassifyId": 0, "SubVersion": 1, "ViewDestId": place, "ZoneId": 0, "IsOnlyRestaurant": false, "head": { "cid": "09031123219046942592", "ctok": "", "cver": "1.0", "lang": "01", "sid": "8888", "syscode": "09", "auth": "", "xsid": "", "extension": [] } }
    ))
    req.end()
}

module.exports = {
    fineFood
}