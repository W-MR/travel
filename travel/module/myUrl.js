const { scenic } = require('../router/scenic/scenic')
const { fineFood } = require('../router/fineFood/fineFood')
function myUrl(req, res) {
    const myUrl = new URL(req.url, 'http://localhost:3000')
    console.log(myUrl);
    const { pathname, searchParams } = myUrl
    let place = searchParams.get('districtId') || 1
    switch (pathname) {
        case '/api/scenic':
            scenic((data) => {
                res.end(data)
            }, place)
            break;
        case '/api/fineFood':
            fineFood((data) => {
                res.end(data)
            },place)
            break;
        default:
            res.end('404')
            break;
    }
}
module.exports = {
    myUrl
}