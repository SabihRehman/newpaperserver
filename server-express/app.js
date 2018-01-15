'use strict'
const ServiceManager = require('./service_manager/requiredModules');
const port = process.env.PORT || 3000;

/** DATABASE CONNECTION */
ServiceManager.mongoose.connect(ServiceManager.config.database);
ServiceManager.mongoose.connection.on( 'connected' , () => {
    console.log('Connected Database ' + ServiceManager.config.database );
})

ServiceManager.mongoose.connection.on('error', (err) => {
    console.log( 'Error to databse --> ' + err )
})
/** DATABASE CONNECTION END */

ServiceManager.app.use(ServiceManager.cors());
ServiceManager.app.use(ServiceManager.bodyParser.json());

ServiceManager.app.on('error', err => {
  log.error('server error', err)
});

ServiceManager.app.listen(port, () => {
  console.log('Server Started on port ' + port)
})

// LOAD APIS
require('./routes')( ServiceManager.app );


