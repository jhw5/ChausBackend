/**
 * Created by Jeffr on 7/26/2017.
 */

var mongoose = require('mongoose')
var Schema = mongoose.Schema
require('../db')

var monSchema = new Schema ({
    1:[String], 2:[String], 3:[String], 4:[String], 5:[String], 6:[String], 7:[String], 8:[String], 9:[String]
})

var tuesSchema = new Schema ({
    1:[String], 2:[String], 3:[String], 4:[String], 5:[String], 6:[String], 7:[String], 8:[String], 9:[String]
})

var wedSchema = new Schema ({
    1:[String], 2:[String], 3:[String], 4:[String], 5:[String], 6:[String], 7:[String], 8:[String], 9:[String]
})

var thursSchema = new Schema ({
    1:[String], 2:[String], 3:[String], 4:[String], 5:[String], 6:[String], 7:[String], 8:[String], 9:[String]
})

var friSchema = new Schema ({
    1:[String], 2:[String], 3:[String], 4:[String], 5:[String], 6:[String], 7:[String], 8:[String], 9:[String]
})

var satSchema = new Schema ({
    1:[String], 2:[String], 3:[String], 4:[String], 5:[String], 6:[String], 7:[String], 8:[String], 9:[String]
})

var sunSchema = new Schema ({
    1:[String], 2:[String], 3:[String], 4:[String], 5:[String], 6:[String], 7:[String], 8:[String], 9:[String]
})

exports.mon = mongoose.model('mon', monSchema)
exports.tues = mongoose.model('tues', tuesSchema)
exports.wed = mongoose.model('wed', wedSchema)
exports.thurs = mongoose.model('thurs', thursSchema)
exports.fri = mongoose.model('fri', friSchema)
exports.sat = mongoose.model('sat', satSchema)
exports.sun = mongoose.model('sun', sunSchema)
