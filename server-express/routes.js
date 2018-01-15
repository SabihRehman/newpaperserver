'use strict'
module.exports = ( app ) => {
    app.use('/api/v1/posts', require('./api/posts'));
    app.use('/api/v1/categories', require('./api/categories'));
}