const fetch = require("node-fetch");

exports.handler = async event => {
    event = event || {};
    const location = event.queryStringParameters.location
    console.log(location);
    const poi = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${process.env.REACT_APP_GOOGLE_MAP_API}&radius=1000&location=${location}&type=restaurant`).then(resp=>resp.json()).then(resp=>resp.results)

    return {
        statusCode: 200,
        body: JSON.stringify(poi)
    };
}