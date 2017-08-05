/**
 * Created by Jeffr on 7/22/2017.
 */

var mongoose = require('mongoose')
mongoose.Promise = require('bluebird');


// if you want to connect to mongodb shell
// mongo ds141950.mlab.com:41950/ricechaus -u admin -p password



// // Connecting to mlab(MongoDB) database
var dbURL = 'mongodb://jhw5:jhw5@ds141950.mlab.com:41950/ricechaus'

if (process.env.MONGOLAB_URI) {
    dbURL = process.env.MONGOLAB_URI;
}

mongoose.connect(dbURL)

///////////////////////////////////////////////////
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbURL)
})
mongoose.connection.on('error', function(err) {
    console.error('Mongoose connection error: ' + err)
})
mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected')
})

process.once('SIGUSR2', function() {
    shutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2')
    })
})
process.on('SIGINT', function() {
    shutdown('app termination', function() {
        process.exit(0)
    })
})
process.on('SIGTERM', function() {
    shutdown('Heroku app shutdown', function() {
        process.exit(0)
    })
})
function shutdown(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg)
        callback()
    })
}
///////////////////////////////////////////////////


// use ricechaus
// db.createUser(
//     {
//         user: "admin",
//         pwd: "password",
//         roles: [
//
//             { role: "root", db: "admin" }
//         ]
//     }
// );