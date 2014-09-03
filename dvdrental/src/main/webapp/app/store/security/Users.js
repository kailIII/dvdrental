Ext.define('Sanjay.store.security.Users', {
	extend : 'Ext.data.Store',
	requires : [ 'Sanjay.model.security.User' ],
	model : 'Sanjay.model.security.User',

	proxy : {
		type : 'ajax',
		url : 'security/users',
		reader : {
			type : 'json',
			rootProperty : 'data'
		}
	}
});
