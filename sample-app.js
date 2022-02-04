var pg = require('pg');
const async = require('async');
const { callbackify } = require('util');

const config = {
    host: '127.0.0.1',
    port: '5433',
    database: 'yugabyte',
    user: 'yugabyte',
    password: 'yugabyte',
    // ssl: {
    //     rejectUnauthorized: true,
    //     ca: '/Users/dmagda/Downloads/yb_cloud/root.crt',
    // },
    connectionTimeoutMillis: 5000
};

var client;

function connect(callbackHadler) {
    console.log('>>>> Connecting to YugabyteDB!');

    client = new pg.Client(config);

    client.connect(callbackHadler);
}

async.series([
    function (callbackHadler) {
        connect(callbackHadler);
    },
    function (callbackHadler) {
        console.log('>>>> Connected to YugabyteDB!');
        callbackHadler();
    }
    
    ], 
    function (err) {
        if (err) {
            console.error('Error: ', err.message, err.stack);
        }
        client.end();
    }
);
