var Schema            = require('schema-client');
var configAuth        = require('auth');

var clientSave = null;

exports.client = function () {
  if (!clientSave) {
    clientSave = new Schema.Client(configAuth.client-id, configAuth.client-key);
  }

  return clientSave;
};


