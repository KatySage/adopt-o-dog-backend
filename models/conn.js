const host = "raja.db.elephantsql.com";
const database = "yaqraxco";
const user = "yaqraxco";
const password = "Pxd_c2IPNQv7K_zobze0B7BgvGgx-7_G";


const pgp = require('pg-promise')({
    query: function (event) {
        console.log("QUERY: ", event.query)
    }
});

const options = {
    host: host,
    database: database,
    user: user,
    password: password
}
const db = pgp(options);

module.exports = db;