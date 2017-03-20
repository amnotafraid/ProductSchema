var Schema          = ('../../config/schema');

exports.list = function (req, res, next) {
  var client = Schema.client;

  client.get('/products', {active: true}, function (err, products) {
    if (err) {
      return res.status(404).send ({
        success: false,
        message: err
      });
    }
    
    res.status(200).json(products);
  });
};

exports.create = function (req, res, next) {
  var client = Schema.client;

  client.post('/products', req.body, function (result) {
    res.status(200).json(result);
  });
};

exports.id = function (req, res, next, id) {
  req.id = id
  return next();
};

exports.getOne = function (req, res, next) {
  var client = Schema.client;

  client.get('/products/{id}', { id: req.id }, function (result) {
    res.status(200).json(result);
  });
};

exports.update = function (req, res, next) {
  var client = Schema.client;

  client.put('/products/{id}', req.body , function (result) {
    res.status(200).json(result);
  });
};

exports.delete = function (req, res, next) {
  var client = Schema.client;

  client.delete('/products/{id}', { id: req.id } , function (result) {
    res.status(200).json(result);
  });
};

