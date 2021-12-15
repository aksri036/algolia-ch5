const initialize = function () {
    const algoliasearch = require("algoliasearch");
    const client = algoliasearch("latency", "059c79ddd276568e990286944276464a");
    return index = client.initIndex("concert_events_instantsearchjs");
}

const ch6 = function () {
    const util = require("util");
    const index = initialize()
    const startDate = new Date('08/14/2019');
    const endDate = new Date('08/18/2019');
    console.log(startDate.getTime(), endDate.getTime())
    index
        .search("New York", {
            filters: `date > ${startDate.getTime()} AND date < ${endDate.getTime()}`
          })
        .then(({ hits }) => {
            console.log(util.inspect(hits));
        })
        .catch(err => {
            console.log(err);
        });
}

const bonus = function(){
    const util = require("util");
    const index = initialize()
    const startDate = new Date('01/01/2018');
    const endDate = new Date('12/31/2018');
    console.log(startDate.getTime(), endDate.getTime())
    index
        .search("Coldplay", {
            filters: `date > ${startDate.getTime()} AND date < ${endDate.getTime()}`
          })
        .then(({ hits }) => {
            for(var i = 0; i<hits.length; i++){
                const hit = hits[i];
                var date = new Date(hit.date);
                console.log(hit.location, date.toDateString())
            }
           // console.log(util.inspect(hits));
        })
        .catch(err => {
            console.log(err);
        });
}

bonus()
