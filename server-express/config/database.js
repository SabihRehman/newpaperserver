'use strict'
module.exports = {
    database : process.env.NODE == 'production' ? 'mongodb://sabih:123456@ds157097.mlab.com:57097/newspaper' : 'mongodb://localhost:27017/newspaper',
    secret : 'secret'
}