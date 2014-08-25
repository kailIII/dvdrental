Ext.define('Sanjay.store.Menu', {
	extend : 'Ext.data.Store',
	requires : [ 'Sanjay.model.menu.Root' ],
	model : 'Sanjay.model.menu.Root',
	proxy : {
		type : 'ajax',
		url : 'menu/main',
		reader : {
			type : 'json',
			rootProperty  : 'items'

		}
	}
});
