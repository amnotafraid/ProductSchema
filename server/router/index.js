var product					= require('./endpoints/product');
/**
 * The index of Routes
 */

module.exports = function (
    app
    ) {

	app.route('/products')
		.get(product.list)
		.post(product.create);

  app.param('productId', product.id);

	app.route('/products/:productId')
		.get(product.getOne)
		.put(product.update)
		.delete(product.delete);

};
