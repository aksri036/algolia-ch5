const initialize = function () {
    const algoliasearch = require("algoliasearch");
    const client = algoliasearch("latency", "6be0576ff61c053d5f9a3225e2a90f76");
    return index = client.initIndex("demo-geosearch");
}

const ch5 = function () {
    const util = require("util");
    const index = initialize()
    const polygon = [
        33.636719,-84.428067,
        47.449,-122.309306,
        33.9486,-83.3263,
        40.777245,-73.872608,
        40.639751,-73.778925,
        32.69285,-83.649211      
      ];

    index
        .search("", {
            insidePolygon: [polygon]
          })
        .then(({ hits }) => {
            console.log(util.inspect(hits));
        })
        .catch(err => {
            console.log(err);
        });
}

const bonus = function(){

    //search airports around this lat lon
    const util = require("util");
    const index = initialize()
    index.search('', {
        aroundLatLng: '36.5003, -106.2509'     //carson national forest latitude and longitude
      }).then(({ hits }) => {
        console.log(util.inspect(hits));
      });

}

bonus()

//ch5()