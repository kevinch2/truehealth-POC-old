// Initializes the `gateway` service on path `/gateway`
const createService = require('feathers-memory');
const hooks = require('./gateway.hooks');

module.exports = function (app) {
  
  const paginate = app.get('paginate');

  const options = {
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/gateway', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('gateway');

  service.hooks(hooks);

  //publish created events (i.e., POSTS)
  service.publish('created', () => app.channel(['authenticated', 'anonymous']));

  //react to a created event (a RESTful POST) 
  service.on('created', data=> {
    console.log('Got a POST');
  });
};
